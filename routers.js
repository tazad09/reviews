var controller = require('./controllers');
var router = require('express').Router();



router.get("/:product_id/list", controller.getListById)



module.exports = router;