const mongoose = require("mongoose");


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



const addReview = (id, rating, summary, body, recommend, name, email, photos, charObject) => {
  // var newReview = new Review ({
  //   product_id: id,
  //   rating: rating,
  //   date: currentDate,
  //   summary: summary,
  //   body: body,
  //   recommend: recommend,
  //   response: "",
  //   reviewer_name: name,
  //   reviewer_email: email,
  //   helpfulness: 0,
  //   photos: photos,
  //   reported: false,
  // }).save()
  // return newReview

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var currentDate = yyyy + '/' + dd + '/' + mm;

  var reviewDoc = {
    product_id: id,
    rating: rating,
    date: currentDate,
    summary: summary,
    body: body,
    recommend: recommend,
    response: "",
    reviewer_name: name,
    reviewer_email: email,
    helpfulness: 0,
    photos: photos,
    reported: false,
  }
  var charObj = (charObject) => {
    obj = {}
    for (var key in charObject) {
      obj.review_id = reviewDoc._id,
      obj.product_id = id,
      obj.characteristic_id = parseInt(key),
      obj.value = charObject[key]
    }
    return obj
  }

  return Review.create(reviewDoc)
  .then(() => CharacteristicReview.create(charObj)).catch(err => console.log(err))

}

const helpful = (id) => {
  return Review.findOneAndUpdate({product_id: id}, {$inc: {helpfulness: 1}}).exec()
}

const report = (id) => {
  return Review.findOneAndUpdate({product_id: id}, {$set:{reported: true}}).exec()
}


module.exports = {
  getList,
  helpful,
  report,
  addReview
};