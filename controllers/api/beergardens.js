import beerGardensData from '../../src/utilities/seeds/beerGardens';

async function index(req, res) {
    const bizs = await beerGardensData.find({}).exec();
    res.json(bizs);
}

async function show(req, res) {
    const biz = await beerGardensData.findById(req.params.id);
    res.json(biz);
}

module.exports = {
    index, 
    show,
}
