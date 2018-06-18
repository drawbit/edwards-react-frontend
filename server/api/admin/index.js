const express = require('express');
const router = express.Router();
const epilogue = require('epilogue');
const models = require('../../../models');
const products = require('./products');
const requests = require('./requests');
const users = require('./users');

router.post('/login', require('./login'));

epilogue.initialize({
  app: router,
  sequelize: models
});

products(epilogue, models);
requests(epilogue, models);
users(epilogue, models);

module.exports = router;
