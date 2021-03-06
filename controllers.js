const mongoose = require("mongoose");

var models = require("./models.js");

const getListById = (req, res) => {
  var id = req.params.product_id;
  var countParam = req.query.count;
  models
    .getList(id, countParam)
    .then((result) => {
      res.status(200).send({
        product: id,
        count: countParam || 0,
        results: result,
      });
    })
    .catch((err) => console.log(err));
};

const postReview = (req, res) => {
  var id = req.params.product_id;
  var rating = req.body.rating;
  var summary =  req.body.summary;
  var body = req.body.body;
  var recommend =  req.body.recommend;
  var name = req.body.name;
  var email = req.body.email;
  var photos = req.body.photos;
  var charObject = req.body.characteristics;

  models.addReview(id, rating, summary, body, recommend, name, email, photos, charObject)
  .then (() => {
    res.sendStatus(201)
  })
  .catch((err) => console.log(err))
}


const putHelpful = (req, res) => {
  var id = req.params.review_id;
  models
    .helpful(id)
    .then(() => res.sendStatus(204))
    .catch((err) => res.sendStatus(404));

};

const reportReview = (req, res) => {
  var id = req.params.review_id;
  models.report(id).then(() => res.sendStatus(204)).catch((err) => res.sendStatus(404))
}

module.exports = {
  getListById,
  putHelpful,
  reportReview,
  postReview
};
