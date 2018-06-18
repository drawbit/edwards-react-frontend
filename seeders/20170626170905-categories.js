'use strict';

const constants = require('../services/constants');

module.exports = {
  up: function (queryInterface, Sequelize) {
    const timestamp = new Date();

    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          'id': constants.CATEGORIES.APPLICATION,
          'label': 'Application',
          'kind': 'application',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': constants.CATEGORIES.MAINTENANCE,
          'label': 'Maintenance',
          'kind': 'maintenance',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': constants.CATEGORIES.RISK,
          'label': 'Risk',
          'kind': 'risk',
          'createdAt': timestamp,
          'updatedAt': timestamp
        }
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'Categories',
      null,
      {}
    );
  }
};
