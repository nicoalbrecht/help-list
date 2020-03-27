/* eslint-disable dot-notation */
/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable radix */
const axios = require('axios');
const Offer = require('../../models/Offer');
const locationUtils = require('../../utils/locationUtils');
const offerApi = require('./offer');

exports.locationAutocomplete = async (req, res) => {
    const places = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.input}&key=${process.env.GOOGLE_MAP_API_KEY}`)
        .then((data) => (data.data === undefined && data.data.predictions !== undefined ? data : data.data.predictions))
        .catch((err) => err);
    return res.json(places);
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
    if (!locationData.lat || !locationData.lng) return res.json({error: true, msg: locationData});
    for (let i = 0; i < allOffers.length; i++) {
        distance = locationUtils.haversineDistance(locationData.lng, locationData.lat, allOffers[i].location.long, allOffers[i].location.lat);
        if (!distance.error) console.log(distance, radius, allOffers[i].location.radius);
        if (!distance.error && distance <= radius) {
            if (allOffers[i].location.radius) {
                if (distance <= allOffers[i].location.radius) resOffers.push(allOffers[i]);
            } else {
                resOffers.push(allOffers[i]);
            }
        } else if (distance.error) {
            resOffers.push({error: distance.error, offer: allOffers[i]});
        }
    }
    return res.json(resOffers);
};

exports.offer = offerApi;
