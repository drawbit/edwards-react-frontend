const express = require('express');
const router = express.Router();

router.get('/', require('./list'));
router.delete('/', require('./delete'));

module.exports = router;
