db = new Mongo().getDB("reviewsdb");

var docObject = {
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
};

db.createCollection("reviews", docObject);

db.reviews_raw.find({}).forEach(function (doc) {

  var photoObj = db.reviewsPhotos.findOne({ 'review_id': doc.id });
  var recBool = false;
  var reportedBool = false;
  var str = "";
  var res = doc.response === "null" ? str : doc.response;

  if ((doc.recommend === "true") || (doc.recommend === 1)){
    recBool = true;
  }
  if ((doc.reported === "true") || (doc.reported === 1)){
    reportedBool = true;
  }

  db.reviews
    .insertOne({
      'id': doc.id,
      'product_id': doc.product_id,
      'rating': doc.rating,
      'date': doc.date,
      'summary': doc.summary,
      'body': doc.body,
      'recommend': recBool,
      'response': res,
      'reviewer_name': doc.reviewer_name,
      'reviewer_email': doc.reviewer_email,
      'helpfulness': doc.helpfulness,
      'photos': [photoObj],
      'reported': reportedBool,
    })
});
