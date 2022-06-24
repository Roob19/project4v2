const express = require('express');
const router = express.Router();
const bizsCtrl = require('../../controllers/api/businesses');

// GET /business
router.get('/business', bizsCtrl.index);
// GET /business/:id
router.get('/business/:id', bizsCtrl.show);

module.exports = router;
