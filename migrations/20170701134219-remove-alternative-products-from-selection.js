'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Selections',
      'alternativeProducts'
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Selections',
      'alternativeProducts',
      {
        type: Sequelize.STRING
      }
    );
  }
};
