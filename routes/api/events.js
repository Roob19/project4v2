
const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

// GET /api/events
router.get('/', eventsCtrl.index);
// GET /api/events/:id
router.get('/:id', eventsCtrl.show);

module.exports = router;
