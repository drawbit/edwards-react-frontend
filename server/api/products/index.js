const express = require('express');
const router = express.Router();

router.get('/:slug', require('./show'));

module.exports = router;
