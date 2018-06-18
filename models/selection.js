'use strict';

const _ = require('lodash');
const selectionOptions = require('../services/selection-options');
const selectionValidator = require('../services/selection-validator');
const constants = require('../services/constants');

module.exports = function(sequelize, DataTypes) {
  var Selection = sequelize.define('Selection', {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    start: {
      allowNull: false,
      validate: {
        isIn: [['APPLICATION', 'LOCATION', 'MAINTENANCE', 'PUMP']]
      },
      type: DataTypes.STRING
    },
    steps: {
      defaultValue: [],
      type: DataTypes.JSON,
      validate: {
        isCorrectSequence(value) {
          if (!selectionValidator(value, this.start)) {
            throw new Error('Unexpected step type');
          }
        }
      }
    },
    status: {
      defaultValue: 'pending',
      type: DataTypes.STRING
    },
    user_id: {
      allowNull: false,
      type: DataTypes.UUID
    }
  });

  Selection.associate = function(models) {
    Selection.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    });
  };

  Selection.prototype.getData = function() {
    let object = this.get();
    return selectionOptions(object.start, object.steps)
      .then(current => {
        object.previous = object.steps.map(step => ({
          type: step.type,
          id: step.id
        }));
        object.current = current;

        return object;
      });
  }

  Selection.prototype.getProducts = function() {
    return getPump(this)
      .then(pump => {
        return (pump ? pump.getProducts() : Promise.resolve([]))
          .then(products => {
            const product = this.getProduct(pump, products);
            const alternatives = this.getAlternativeProducts(pump, products)
                                     .filter(alt => alt.id !== product.id);

            return { product, alternatives };
          });
      });
  }

  Selection.prototype.updateSteps = function(step) {
    let steps = this.get('steps');
    steps.push(step);
    return this.update({ steps });
  }

  Selection.prototype.resetSteps = function(step) {
    const steps = this.get('steps');
    const index = _.findIndex(steps, step);
    return this.update({ steps: steps.slice(0, index) });
  }

  Selection.hook('beforeSave', (selection, _options) => {
    const steps = selection.get('steps');
    if (steps.length < 5) {
      selection.status = 'pending';
      return;
    }

    selection.status = 'completed';
  });

  Selection.prototype.getProduct = function(pump, products) {
    if (!pump) return null;
    const scores = this.steps.map(step => {
      const filter = pump.filters.find(filter => {
        return (filter.id == step.id) &&
               (filter.category_id == constants.CATEGORIES[step.type])
      });

      return filter ? filter.PumpFilter.score : 0;
    });

    const maxScore = Math.max.apply(null, scores);
    const suggested = products.filter(p => !p.PumpProduct.alternative);

    return suggestedProduct(suggested, maxScore) || topProduct(suggested);
  };

  Selection.prototype.getAlternativeProducts = function(pump, products) {
    if (!pump) return [];

    const alternatives = products.filter(product => {
      return product.PumpProduct.alternative;
    });

    return _.uniqBy(alternatives, 'id');
  };

  return Selection;
};

const getPump = (selection) => {
  const models = require('../models');
    const Pump = models.Pump;

    if (selection.status != 'completed') return Promise.resolve(null);

    const pump = selection.steps.find(step => step.type == 'PUMP');

    return Pump.findById(
      pump.id,
      {
        include: [
          { model: models.Filter, as: 'filters' }
        ]
      }
    );
}

const suggestedProduct = (products, score) => {
  return products.find(product => product.PumpProduct.score == score);
}

const topProduct = (products) => {
  const sorted = products.sort((a, b) => {
    return a.PumpProduct.score - b.PumpProduct.score
  });
  return sorted[0];
}
