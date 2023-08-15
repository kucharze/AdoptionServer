const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Neccesary middleware
require("dotenv").config();
//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Tell express to use middleware
//Encode the url to read in a acertain way
//This is so we can use the post request to read body data
app.use(express.urlencoded({ extended: false }));

//Allows for use of res.json
app.use(express.json());

//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

//Routes
app.use((req, res, next) => {
  console.log("I run for all routes");
  next(); //allows the next necessary route to run
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
