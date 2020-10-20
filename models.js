const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/reviewsdb')

const reviewsSchema = require('./schemas').reviewsSchema;
const characteristicSchema = require('./schemas').characteristicSchema;
const characteristicsReviewsSchema = require('./schemas').characteristicsReviewsSchema;
const reviewsPhotosSchema = require('./schemas').reviewsPhotosSchema

var Review = mongoose.model('Review', reviewsSchema);
var Characteristic = mongoose.model('Characteristic', characteristicSchema);
var CharacteristicReview = mongoose.model('CharacteristicReview', characteristicsReviewsSchema);
var ReviewPhoto = mongoose.model('ReviewPhoto', reviewsPhotosSchema);


//run this function with .lean() to observe the performance
const getList = (id, countParam) => {
  return Review.find({product_id: id}).limit(countParam).sort({'helpfulness': -1}).exec()
};


module.exports = {
  getList
};