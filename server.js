const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const router = require("./routers.js")

//mongoose.connect('mongodb://mongo:27017/reviewsdb', () => console.log('connected!'))
//host.docker.internal gets the data from the local database
mongoose.connect('mongodb://host.docker.internal:27017/reviewsdb', () => console.log('connected!'))


app.use(bodyParser.json());
//app.use(morgan('dev'));

app.use("/reviews", router)

const port = 3000;
app.listen(port, () => {
  console.log('listening on port 3000')
})