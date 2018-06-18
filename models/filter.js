'use strict';
module.exports = function(sequelize, DataTypes) {
  var Filter = sequelize.define('Filter', {
    label: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Filter;
};
