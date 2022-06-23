const express = require('express');
const router = express.Router();
const beerGardenCtrl = require('../../controllers/api/beergardens');

router.get('/', beerGardenCtrl.index);

router.get('/:id', beerGardenCtrl.show);

module.exports = router;