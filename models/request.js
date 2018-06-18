'use strict';

const emailRequest = require('../services/email-request');

module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define('Request', {
    selection_id: DataTypes.UUID,
    product_slug: DataTypes.STRING,
    kind: {
      allowNull: false,
      validate: {
        isIn: [['email', 'call']]
      },
      type: DataTypes.STRING
    },
    contact: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Is required'
        }
      }
    }
  });

  Request.associate = function(models) {
    Request.belongsTo(models.Selection, {
      as: 'selection',
      foreignKey: 'selection_id'
    });

    Request.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_slug',
      targetKey: 'slug'
    });
  };

  Request.hook('beforeValidate', (request) => {
    if (request.kind === 'email') {
      return request.getSelection({ include: 'user' })
                    .then(selection => {
                      const user = selection.user;
                      request.contact = user.email_address;
                    });
    }
  });

  Request.hook('afterSave', (request) => {
    emailRequest(request.id);
  });

  return Request;
};
