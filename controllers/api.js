/* eslint-disable max-len */
/* eslint-disable radix */
const validator = require('validator');
const axios = require('axios');
const crypto = require('crypto');
const Offer = require('../models/Offer');
const locationUtils = require('../utils/locationUtils');

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
    res.render('api/index', {
        title: 'API Examples'
    });
};

exports.createOffer = (req, res, next) => {
    const validationErrors = [];
    const data = req.body;
    data.location = data.location.length !== 0 ? JSON.parse(data.location) : {lat: undefined, lng: undefined, radius: undefined};
    console.log(data);
    if (validator.isEmpty(data.title)) validationErrors.push({msg: 'Angebotstitel darf nicht leer sein!'});
    if (validator.isEmpty(data.category)) validationErrors.push({msg: 'Kategorie darf nicht leer sein!'});
    if (validator.isEmpty(data.description)) validationErrors.push({msg: 'Beschreibung darf nicht leer sein!'});
    if (validator.isEmpty(data.name)) validationErrors.push({msg: 'Name darf nicht leer sein!'});
    if (validator.isEmpty(data.email) && validator.isEmpty(data.phone)) validationErrors.push({msg: 'Entweder E-Mail oder Telefon muss angegeben werden!'});
    if (validator.isEmpty(data.phone) && !validator.isEmail(data.email)) validationErrors.push({msg: 'E-Mail Adresse nicht gültig!'});
    if (validationErrors.length) {
        req.flash('errors', validationErrors);
        return res.redirect('/offers/create');
    }
    const newOffer = new Offer({
        title: data.title,
        description: data.description,
        location: {
            lat: data.location.lat,
            long: data.location.lng,
            radius: data.location.radius
        },
        provider: {
            name: data.name,
            mail: data.email,
            phone: data.phone
        },
        category: data.category,
        changeToken: crypto.randomBytes(64).toString('base64').replace(/\//g, '_').replace(/\+/g, '-'),
        changeTokenValidTill: new Date().setDate(new Date().getDate + 2) // valid for 2 days
    });
    newOffer.save();
    req.flash('success', [{msg: `${data.title} wurde erfolgreich erstellt!`}]);
    return res.redirect('/offers');
};

exports.getOffers = async (req, res, next) => {
    const offers = await Offer.find().populate('category').exec();
    return res.json(offers);
};

exports.locationAutocomplete = async (req, res) => {
    const places = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.input}&key=${process.env.GOOGLE_MAP_API_KEY}`)
        .then((data) => (data.data === undefined && data.data.predictions !== undefined ? data : data.data.predictions))
        .catch((err) => err);
    return res.json(places);
};

exports.getInDistance = async (req, res) => {
    const input = {
        lat: req.params.lat,
        lon: req.params.lon,
        radius: parseInt(req.params.radius)
    };
    const inputOffer = await Offer.findOne({'location.lat': input.lat, 'location.long': input.lon});
    const allOffers = await Offer.find();
    const resOffers = [];
    let distance;
    for (let i = 0; i < allOffers.length; i++) {
        distance = inputOffer.getDistanceTo(allOffers[i]);
        if (distance <= input.radius) resOffers.push(allOffers[i]);
    }
    return res.json(resOffers);
};

exports.getInDistanceById = async (req, res) => {
    const locationData = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.id}&key=${process.env.GOOGLE_MAP_API_KEY}&fields=name,geometry`)
        .then((data) => {
            if (data.data.status !== 'OK') {
                return data.data;
            }
            return data.data.result.geometry.location;
        })
        .catch((err) => err);
    const allOffers = await Offer.find();
    const resOffers = [];
    const radius = parseInt(req.params.radius);
    let distance;
    for (let i = 0; i < allOffers.length; i++) {
        distance = locationUtils.haversineDistance(locationData.lng, locationData.lat, allOffers[i].location.long, allOffers[i].location.lat);
        if (!distance.error) console.log(distance);
        if (!distance.error && distance <= radius && distance <= allOffers[i].location.radius) resOffers.push(allOffers[i]);
    }
    return res.json(resOffers);
};
