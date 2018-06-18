'use strict';
module.exports = function(sequelize, DataTypes) {
  var PumpFilter = sequelize.define('PumpFilter', {
    pump_id: DataTypes.INTEGER,
    filter_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PumpFilter;
};
