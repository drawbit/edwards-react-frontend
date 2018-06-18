'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const timestamp = new Date();

    return queryInterface.bulkInsert(
      'Products',
      [
        {
          'id': 1,
          'title': 'Edwards Simple Service Kits and Ultragrade Oil',
          'copy': '<p>Service should be simple, and with a new range of Simple Service Kits, Edwards plans to keep it that way. Each kit is structured in a way that provides all the items needed to complete essential maintenance tasks. This enables you to start a job with the confidence that you will have everything you need to complete it successfully. Saving you time, and avoiding common frustrations that can turn a simple task into a virtual nightmare.</p>',
          'slug': 'edwards-simple-service-kits-and-ultragrade-oil',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 2,
          'title': 'Vacuum Academy Maintenance Training',
          'copy': 'Lorem Ipsum...',
          'slug': 'vacuum-academy-maintenance-training',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 3,
          'title': 'Service Exchange Pumps',
          'copy': '<p>Your process up-time targets demand a rapid response in either planned or unplanned down situations. We maintain a comprehensive inventory of service exchange product, built and tested to as-new performance specifications in our service centres. Call us, and we’ll ship you the exchange product and you simply return the original product to us – fast, simple and with minimum downtime!</p>',
          'slug': 'service-exchange-pumps',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 4,
          'title': 'Managed Maintenance Program',
          'copy': 'Lorem Ipsum...',
          'slug': 'managed-maintenance-program',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 5,
          'title': 'Edwards ReManufacturing',
          'copy': '<p>You need the flexibility of an equipment service offer ranging from a basic service to full factory-new remanufacturing, available through our global network of service centres. Recognising the needs of our broad customer base vary, our offer varies by product range and market. Fixed price, fixed scope options help with simple budgeting and purchasing. On some products, we provide flexible “pay what you need” pricing.</p><p>Our service centres are managed globally as one virtual factory, all following the same OEM procedures and process. Our focus on quality, environment and workplace safety is second to none, with an active service centre registration programme to ISO9001, ISO14001 and OHSAS18001 standards.</p>',
          'slug': 'edwards-remanufacturing',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 6,
          'title': 'Service Exchange',
          'copy': '<p>Your process up-time targets demand a rapid response in either planned or unplanned down situations. We maintain a comprehensive inventory of service exchange product, built and tested to as-new performance specifications in our service centres. Call us, and we’ll ship you the exchange product and you simply return the original product to us – fast, simple and with minimum downtime!</p>',
          'slug': 'service-exchange',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 7,
          'title': 'Managed Maintenance',
          'copy': 'Lorem Ipsum...',
          'slug': 'managed-maintenance',
          'createdAt': timestamp,
          'updatedAt': timestamp
        },
        {
          'id': 8,
          'title': 'Field Service',
          'copy': '<p>You need to deliver continuous improvement of equipment uptime and reduce your site management costs. Have you ever thought about our technicians based on or visiting your site and working in partnership with you?</p><p>Our field service technicians have thousands of hours experience, and participate in our continuous training and certification programme so you know they will always be experts on your equipment. Whatever your support requirement, we can help you get the best performance from our equipment in your application.</p>',
          'slug': 'field-service',
          'createdAt': timestamp,
          'updatedAt': timestamp
        }
      ],
      {}
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'Products',
      null,
      {}
    );
  }
};
