'use strict';

const constants = require('../services/constants');

module.exports = {
  up: function (queryInterface, Sequelize) {
    const timestamp = new Date();

    return queryInterface.bulkInsert(
      'PumpFilters',
      [
        // Small EV
        {
          'pump_id': 1,
          'filter_id': 1,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 9,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 10,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 1,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 1,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // RV
        {
          'pump_id': 2,
          'filter_id': 1,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 9,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 10,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 2,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 2,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // XDS/nXDS Scroll
        {
          'pump_id': 3,
          'filter_id': 1,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 9,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 10,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 11,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 20,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 16,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 3,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 3,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // EXT/nEXT Scientific Turbo
        {
          'pump_id': 4,
          'filter_id': 1,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 9,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 10,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 11,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 20,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 16,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 4,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 4,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // Medium EM
        {
          'pump_id': 5,
          'filter_id': 2,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 12,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 13,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 20,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 21,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 5,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 5,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // Large EM
        {
          'pump_id': 6,
          'filter_id': 2,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 12,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 13,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 20,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 21,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 6,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 6,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // ES/Microvane Rotary Vane
        {
          'pump_id': 7,
          'filter_id': 2,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 14,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 15,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 16,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 22,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 7,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 7,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // EH/HV/QMB/Stokes Mechanical Boosters
        {
          'pump_id': 8,
          'filter_id': 3,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 12,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 13,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 20,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 21,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 8,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 8,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // GV/EDC/GXS/IDX Industrial Dry
        {
          'pump_id': 9,
          'filter_id': 3,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 12,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 13,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 20,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 21,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 9,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 9,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // EOSi Rotary Screw
        {
          'pump_id': 10,
          'filter_id': 4,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 5,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 3,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 12,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 16,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 10,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 10,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // CDX/CXS/EPD Chemical Dry
        {
          'pump_id': 11,
          'filter_id': 23,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 24,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 25,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 11,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 11,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // Stokes Microvac Rotary Piston
        {
          'pump_id': 12,
          'filter_id': 7,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 15,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 21,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 20,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 24,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 25,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 12,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 12,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // LR/SHR Liquid Ring
        {
          'pump_id': 13,
          'filter_id': 8,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 25,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 26,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 13,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 13,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // HT/B-series Diffusion/Vapour Boosters
        {
          'pump_id': 14,
          'filter_id': 14,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 15,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 21,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 14,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 14,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // STP Mag-Lev Turbo Pumps
        {
          'pump_id': 15,
          'filter_id': 14,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 17,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 18,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 21,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 15,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 15,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },

        // EPX/iQ/IH/iGX/iXH Dry (Semiconductor)
        {
          'pump_id': 16,
          'filter_id': 15,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 16,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 21,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 20,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 24,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 25,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 16,
          'filter_id': 27,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 28,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 29,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 30,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 31,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        //
        {
          'pump_id': 16,
          'filter_id': 32,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 33,
          'score': constants.SCORES.GREEN,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 34,
          'score': constants.SCORES.ORANGE,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'filter_id': 35,
          'score': constants.SCORES.RED,
          'createdAt': timestamp,
          'updatedAt': timestamp
        }
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'PumpFilters',
      null,
      {}
    );
  }
};
