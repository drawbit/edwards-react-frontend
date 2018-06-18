'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pump = sequelize.define('Pump', {
    label: DataTypes.STRING,
    image: DataTypes.STRING
  });

  Pump.associate = function(models) {
    Pump.belongsToMany(models.Filter, {
      as: 'filters',
      through: models.PumpFilter,
      foreignKey: 'pump_id',
      otherKey: 'filter_id'
    });

    Pump.belongsToMany(models.Product, {
      as: 'products',
      through: models.PumpProduct,
      foreignKey: 'pump_id',
      otherKey: 'product_id'
    });
  }

  return Pump;
};
