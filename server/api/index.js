const express = require('express');
const csv = require('csv-express');
const auth = require('../middleware/auth');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/selections', require('./selections'));
router.use('/products', require('./products'));
router.use('/requests', require('./requests'));

router.use('/admin', require('./admin'));
router.use('/exports', auth, require('./exports'));

module.exports = router;
