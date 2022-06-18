
const express = require('express');
const router = express.Router();
const bizsCtrl = require('../../controllers/api/businesses');

// GET /api/business
router.get('/', bizsCtrl.index);
// GET /api/business/:id
router.get('/:id', bizsCtrl.show);

module.exports = router;
