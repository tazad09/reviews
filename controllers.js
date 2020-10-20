const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/reviewsdb");
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

module.exports = {
  getListById
};
