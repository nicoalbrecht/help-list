/* eslint-disable max-len */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-nested-ternary */
const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: {
    lat: Number,
    long: Number,
    radius: Number,
    address: {
      street: String,
      postCode: String,
      city: String,
      country: String
    }
  },
  timeSlot: {
    start: String,
    end: String
  },
  onlyWeekend: Boolean,
  provider: {
    name: String,
    mail: String,
    phone: String
  },
  tags: [String],
  changeToken: String,
  changeTokenValidTill: Date,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps: true });

offerSchema.methods.getDistanceTo = function (cmp, cb) {
  const toRadian = (angle) => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);
  const RADIUS_OF_EARTH_IN_KM = 6371;

  let lat1 = this.location.lat;
  let lat2 = cmp.location && cmp.location.lat ? cmp.location.lat : cmp.lat ? cmp.lat : undefined;
  const lon1 = this.location.long;
  const lon2 = cmp.location && cmp.location.long ? cmp.location.long : cmp.long ? cmp.long : undefined;

  console.log({lat1, lon1, lat2, lon2});

  if (!lat2 || !lon2) {
    return cb({error: true, msg: 'Object to compare has an invalid format.'}, null);
  }

  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  // Haversine Formula
  const a = Math.pow(Math.sin(dLat / 2), 2)
    + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  const finalDistance = RADIUS_OF_EARTH_IN_KM * c;

  if (cb) cb(null, finalDistance);
  return finalDistance;
};

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
