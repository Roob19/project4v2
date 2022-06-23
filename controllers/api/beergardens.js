const Garden = require('../../src/utilities/seeds/beerGardens');

async function index(req, res) {
    const bizs = await Garden.find({}).exec();
    res.json(bizs);
}

async function show(req, res) {
    const biz = await Garden.findById(req.params.id);
    res.json(biz);
}

module.exports = {
    index, 
    show,
}
