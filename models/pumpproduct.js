'use strict';
module.exports = function(sequelize, DataTypes) {
  var PumpProduct = sequelize.define('PumpProduct', {
    pump_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    alternative: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PumpProduct;
};
