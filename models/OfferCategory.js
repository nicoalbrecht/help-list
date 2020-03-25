const mongoose = require('mongoose');

const offerCategory = new mongoose.Schema({
  title: String,
  offers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Offer' }]
}, { timestamps: true });


const Category = mongoose.model('Category', offerCategory);

module.exports = Category;
