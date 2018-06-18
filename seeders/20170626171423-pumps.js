'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const timestamp = new Date();

    return queryInterface.bulkInsert(
      'Pumps',
      [
        {
          'id': 1,
          'label': 'Small EM',
          'image': '/images/Pumps/Small-EM.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 2,
          'label': 'RV',
          'image': '/images/Pumps/RV.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 3,
          'label': 'XDS/nXDS Scroll',
          'image': '/images/Pumps/XDS-nXDS-Scroll.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 4,
          'label': 'EXT/nEXT Scientific Turbo',
          'image': '/images/Pumps/EXT-nEXT-Scientific-Turbo.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 5,
          'label': 'Medium EM',
          'image': '/images/Pumps/Medium-EM.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 6,
          'label': 'Large EM',
          'image': '/images/Pumps/Large-EM.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 7,
          'label': 'ES/Microvane Rotary Vane',
          'image': '/images/Pumps/ES-Microvane-Rotary.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 8,
          'label': 'EH/HV/QMB/Stokes Mechanical Boosters',
          'image': '/images/Pumps/EH-HV-QMB-Stokes-Mechincal-Boosters.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 9,
          'label': 'GV80 Dry Star',
          'image': '/images/Pumps/GV80-Dry-Star.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 10,
          'label': 'EOSi Rotary Screw',
          'image': '/images/Pumps/EOSi-Rotary-Screw.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 11,
          'label': 'CDX/CXS/EPD Chemical Dry',
          'image': '/images/Pumps/CDX-CDS-EPD-Chemical-Dry.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 12,
          'label': 'Stokes Microvac Rotary Piston',
          'image': '/images/Pumps/Stokes-Microvac-Rotary-Piston.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 13,
          'label': 'LR/SHR Liquid Ring',
          'image': '/images/Pumps/LR-SHR-Liquid-Ring.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 14,
          'label': 'HT/B-series Diffusion/Vapour Boosters',
          'image': '/images/Pumps/HTB-series-DIfussion-Vapour-Boosters.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 15,
          'label': 'STP Mag-Lev Turbo Pumps',
          'image': '/images/Pumps/STP-Mag-Lev-Turbo-Pumps.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 16,
          'label': 'EPX/iQ/IH/iGX/iXH Dry (Semiconductor)',
          'image': '/images/Pumps/EPXiQIHiGXiXH.png',
          'createdAt': timestamp,
          'updatedAt': timestamp
        }
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'Pumps',
      null,
      {}
    );
  }
};
