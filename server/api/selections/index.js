const express = require('express');
const router = express.Router();

router.post('/', require('./create'));
router.get('/:id', require('./show'));
router.put('/:id', require('./updateSteps'));
router.put('/:id/reset', require('./resetSteps'));

router.get('/:id/products', require('./products'));

module.exports = router;
