'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const timestamp = new Date();

    return queryInterface.bulkInsert(
      'PumpProducts',
      [
        // Small EV
        {
          'pump_id': 1,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'product_id': 3,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'product_id': 4,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 1,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // RV
        {
          'pump_id': 2,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'product_id': 3,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'product_id': 4,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 2,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // XDS/nXDS Scroll
        {
          'pump_id': 3,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'product_id': 3,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'product_id': 4,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 3,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // EXT/nEXT Scientific Turbo
        {
          'pump_id': 4,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'product_id': 3,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'product_id': 4,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 4,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // Medium EM
        {
          'pump_id': 5,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'product_id': 4,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 5,
          'product_id': 6,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // Large EM
        {
          'pump_id': 6,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'product_id': 4,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 6,
          'product_id': 6,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // ES/Microvane Rotary Vane
        {
          'pump_id': 7,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'product_id': 4,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 7,
          'product_id': 6,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // EH/HV/QMB/Stokes Mechanical Boosters
        {
          'pump_id': 8,
          'product_id': 5,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'product_id': 6,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'product_id': 7,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 8,
          'product_id': 6,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // GV/EDC/GXS/IDX Industrial Dry
        {
          'pump_id': 9,
          'product_id': 5,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'product_id': 6,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'product_id': 7,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'product_id': 7,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 9,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // EOSi Rotary Screw
        {
          'pump_id': 10,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'product_id': 4,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 10,
          'product_id': 8,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // CDX/CXS/EDP Chemical Dry
        {
          'pump_id': 11,
          'product_id': 5,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'product_id': 6,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'product_id': 7,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'product_id': 7,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'product_id': 7,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 11,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // Stokes Microvac Rotary Piston
        {
          'pump_id': 12,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'product_id': 4,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'product_id': 5,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 12,
          'product_id': 6,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // LR/SHR Liquid Ring
        {
          'pump_id': 13,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'product_id': 4,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 13,
          'product_id': 8,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // HT/B-series Diffusion/Vapour Boosters
        {
          'pump_id': 14,
          'product_id': 1,
          'score': 1,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'product_id': 2,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'product_id': 4,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 14,
          'product_id': 8,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // STP Mag-Lev Turbo Pumps
        {
          'pump_id': 15,
          'product_id': 5,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'product_id': 6,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 15,
          'product_id': 7,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        // EPX/iQ/IH/iGX/iXH/iXL  Dry (Semiconductor)
        {
          'pump_id': 16,
          'product_id': 5,
          'score': 2,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'product_id': 6,
          'score': 3,
          'alternative': false,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'pump_id': 16,
          'product_id': 7,
          'score': 0,
          'alternative': true,
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'PumpProducts',
      null,
      {}
    );
  }
};
