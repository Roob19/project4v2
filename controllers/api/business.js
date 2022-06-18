const Business = require('../../models/business');

async function index(req, res) {
    const bizs = await Business.find({}).exec();
    res.json(bizs);
}

async function show(req, res) {
    const biz = await Business.findById(req.params.id);
    res.json(biz);
}

module.exports = {
    index, 
    show,
}
