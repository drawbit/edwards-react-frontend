'use strict';

const constants = require('../services/constants');

module.exports = {
  up: function (queryInterface, Sequelize) {
    const timestamp = new Date();

    return queryInterface.bulkInsert(
      'Filters',
      [
        // Application
        {
          'id': 1,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Clean/Light R&D',
          'image': '/images/Applications/Clean-and-Light-R&D.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 2,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Light Industrial',
          'image': '/images/Applications/Light-Industrial.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 3,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Space simulation chamber evacuation',
          'image': '/images/Applications/Space-Simulation-Chamber-Evacuation.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 4,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Light duty coating',
          'image': '/images/Applications/Light-Duty-Coating.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 5,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Light duty drying',
          'image': '',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 7,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Light industrial applications',
          'image': '',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 8,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Rough vacuum',
          'image': '',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 9,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Harsh R&D',
          'image': '/images/Applications/Hars-R&D.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 10,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Analytical Instruments',
          'image': '/images/Applications/Analytical-Instruments.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 11,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Backing turbopumps',
          'image': '/images/Applications/Backing-Turbopumps.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 12,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Refrigeration and air conditioning system evacuation, drying, and backfilling',
          'image': '/images/Applications/Refrigeration-and-air-conditioning-system.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 13,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Pharmaceutical freeze drying',
          'image': '/images/Applications/Pharmaceutical-Freeze-Drying.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 14,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Industrial Coating',
          'image': '/images/Applications/Industrial-Coating.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 15,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Industrial Drying',
          'image': '',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 16,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'General Industrial',
          'image': '/images/Applications/General-Industrial.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 17,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'High Energy Physics',
          'image': '/images/Applications/High-Energy-Physics.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 18,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'R&D',
          'image': '/images/Applications/R-&-D.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 20,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Thin Film Coating Technologies',
          'image': '/images/Applications/Thin-Film-Coating-Technologies.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 21,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Vacuum Metallurgy Processes',
          'image': '/images/Applications/Vacuum-Metallurgy-Prcesses.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 22,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Heat Treating',
          'image': '/images/Applications/Heat-Treating.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 23,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Petrochemical processing',
          'image': '/images/Applications/Petrochemical-Processing.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 24,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Pharmaceutical processing',
          'image': '/images/Applications/Pharmaceutical-Processing.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 25,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Chemical processing',
          'image': '/images/Applications/Chemical-Processing.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 26,
          'category_id': constants.CATEGORIES.APPLICATION,
          'label': 'Power generation',
          'image': '/images/Applications/Power-Generation.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // Maintenance
        {
          'id': 27,
          'category_id': constants.CATEGORIES.MAINTENANCE,
          'label': 'Self-perform all maintenance and repairs',
          'image': '/images/Maintenance/Self-Perform-all-maintenance.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 28,
          'category_id': constants.CATEGORIES.MAINTENANCE,
          'label': 'Self-perform maintenance, vendor for repairs',
          'image': '/images/Maintenance/Self-Perform-Maintenace-Vendor.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 29,
          'category_id': constants.CATEGORIES.MAINTENANCE,
          'label': 'Run-to-Crash followed by Overhall or Replace',
          'image': '/images/Maintenance/Run-to-Crash-Followed.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 30,
          'category_id': constants.CATEGORIES.MAINTENANCE,
          'label': 'Vendor provided maintenance with repairs at failure',
          'image': '/images/Maintenance/Vendor-Provided-maintenance.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 31,
          'category_id': constants.CATEGORIES.MAINTENANCE,
          'label': 'Vendor provided comprehensive service',
          'image': '/images/Maintenance/Vendor-Provided-maintenance-Comprehensivce.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // Risk
        {
          'id': 32,
          'category_id': constants.CATEGORIES.RISK,
          'label': 'No operational risk',
          'image': '',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 33,
          'category_id': constants.CATEGORIES.RISK,
          'label': 'minor inconvenience',
          'image': '',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 34,
          'category_id': constants.CATEGORIES.RISK,
          'label': 'impact recoverable on-site',
          'image': '',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 35,
          'category_id': constants.CATEGORIES.RISK,
          'label': 'Significant impact to facility operation',
          'image': '',
          'createdAt': timestamp,
          'updatedAt': timestamp
        }
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'Filters',
      null,
      {}
    );
  }
};
