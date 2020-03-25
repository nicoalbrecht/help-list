const Category = require('../models/OfferCategory');
const Offer = require('../models/Offer');
/**
 * GET /
 * Home page.
 */
exports.index = async (req, res) => {
    const offers = await Offer.find().sort('createdAt').populate('category').exec();
    const latestOffers = offers.slice(0, 5);
    res.render('home', {
        title: 'Home',
        latestOffers,
        offerCount: offers.length
    });
};
