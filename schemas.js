const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  rating: Number,
  date: String,
  summary: String,
  body: String,
  recommend: Boolean,
  response: String,
  reviewer_name: String,
  reviewer_email: String,
  helpfulness: Number,
  photos: Array,
  reported: String,
});

const characteristicSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
});

//const Characteristics = mongoose.model('Characteristics', characteristicSchema)
const characteristicsReviewsSchema = new mongoose.Schema({
  id: Number,
  characteristic_id: Number,
  review_id: Number,
  value: Number
});

const reviewsPhotosSchema = new mongoose.Schema({
  id: Number,
  review_id: Number,
  url: String,
});


module.exports = {
  reviewsSchema,
  characteristicSchema,
  characteristicsReviewsSchema,
  reviewsPhotosSchema
}