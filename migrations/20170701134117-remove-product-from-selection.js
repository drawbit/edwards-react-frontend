'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Selections',
      'product'
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Selections',
      'product',
      {
        type: Sequelize.STRING
      }
    );
  }
};
