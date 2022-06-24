const express = require('express');
const router = express.Router();
const beerGardenCtrl = require('../../controllers/api/beergardens');

router.get('/beergarden', beerGardenCtrl.index);

router.get('/beergarden/:id', beerGardenCtrl.show);

module.exports = router;