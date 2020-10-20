var controller = require('./controllers');
var router = require('express').Router();



router.get("/:product_id/list", controller.getListById)
router.post('/:product_id', controller.postReview)
router.put('/helpful/:review_id', controller.putHelpful)
router.put('/report/:review_id', controller.reportReview)



module.exports = router;


// const addReview = (id, rating, summary, body, recommend, name, email, photos, charObject) => {

//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0');
//   var yyyy = today.getFullYear();
//   var currentDate = yyyy + '/' + dd + '/' + mm;
//   var lastId;

//   var reviewDoc = {
//     id: lastId,
//     product_id: id,
//     rating: rating,
//     date: currentDate,
//     summary: summary,
//     body: body,
//     recommend: recommend,
//     response: "",
//     reviewer_name: name,
//     reviewer_email: email,
//     helpfulness: 0,
//     photos: photos,
//     reported: false,
//   }
//   var charObj = (charObject) => {
//     obj = {}
//     for (var key in charObject) {
//       obj.review_id = charObject[0]._id,
//       obj.product_id = id,
//       obj.characteristic_id = parseInt(key),
//       obj.value = charObject[key]
//     }
//     console.log(obj)
//     return obj
//   }


//   return Review.find({}).sort({id: -1}).limit(1)
//   .then((res) => {
//     lastId = res[0].id + 1
//     Review.create(reviewDoc)
//   }).then(() => CharacteristicReview.create(charObj))

// }
