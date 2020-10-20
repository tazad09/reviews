var controller = require('./controllers');
var router = require('express').Router();



router.get("/:product_id/list", controller.getListById)
//router.post('/:product_id', controller.postReview)
router.put('/helpful/:review_id', controller.putHelpful)
router.put('/report/:review_id', controller.reportReview)



module.exports = router;