const Category = require('../models/OfferCategory');
const Offer = require('../models/Offer');

/**
 * GET /offers
 * Overview of all offers
 */
exports.getOverview = async (req, res, next) => {
    const offers = await Offer.find().populate('category').exec();
    const categories = await Category.find();
    res.render('offers/overview', {
        title: 'Angebots Übersicht',
        offers,
        categories
    });
};

/**
 * GET /offers/create
 * Create new offer
 */
exports.createOfferView = async (req, res, next) => {
    const categories = await Category.find().populate('category').exec();
    res.render('offers/create', {
        title: 'Angebot Erstellen',
        categories,
        google_map_api_key: process.env.GOOGLE_MAP_API_KEY
    });
};
