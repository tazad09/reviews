const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const router = require("./routers.js")

mongoose.connect('mongodb://localhost:27017/reviewsdb', () => console.log('connected!'))


app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/reviews", router)

const port = 2000;
app.listen(port, () => {
  console.log('listening on port 2000')
})