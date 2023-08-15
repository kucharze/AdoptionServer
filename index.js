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

//Mongoose connection logic
const Cats = require("./models/Cats");
const Dogs = require("./models/Dogs");
const Dog = require("./models/Dogs");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the animal shelter</h1>");
});

app.delete("/dogs/:id", (req, res) => {
  Dog.findByIdAndRemove(req.params.id).then((err, data) => {
    res.redirect("/dogs"); //redirect back to fruits index
  });
  //   res.send("deleted");
});

//Dog routes
app.get("/dogs", (req, res) => {
  Dogs.find({}).then((allDogs) => {
    console.log(allDogs);
    res.render("DogIndex", { dogs: allDogs });
  });
});

app.get("/dogs/new", (req, res) => {
  //Render form
  res.render("NewDog");
});

app.get("/dogs/:id/edit", (req, res) => {
  //Render form
  Dog.findById(req.params.id).then((foundDog) => {
    //find the fruit
    // if (!err) {
    // console.log(foundDog);
    res.render("Dogedit", {
      dog: foundDog, //pass in the found fruit so we can prefill the form
      //   id: req.params.id,
    });
    // } else {
    //   res.send({ msg: err.message });
    // }
  });
  //   res.render("Dogedit");
});

app.put("/dogs/:id", async (req, res) => {
  //   if (req.body.readyToEat === "on") {
  //     req.body.readyToEat = true;
  //   } else {
  //     req.body.readyToEat = false;
  //   }

  Dogs.findByIdAndUpdate(req.params.id, req.body).then((err, data) => {
    res.redirect("/dogs"); //redirect back to fruits index
  });
});

app.post("/dogs", async (req, res) => {
  await Dogs.create(req.body);
  //await res.send(newFruit);
  //console.log(fruits);
  res.redirect("/dogs");
});

//Cat Routes
app.get("/cats", (req, res) => {
  Cats.find({}).then((allCats) => {
    res.render("CatIndex", { cats: allCats });
  });
});

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
