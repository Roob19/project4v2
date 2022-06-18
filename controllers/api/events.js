const Event = require('../../models/event');

async function index(req, res) {
    const evts = await Event.find({}).exec();
    res.json(evts);
}

async function show(req, res) {
    const evt = await Event.findById(req.params.id);
    res.json(evt);
}

module.exports = {
    index, 
    show,
}
