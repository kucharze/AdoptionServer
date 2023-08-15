const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hadFirstCheckup: { type: Boolean, required: true },
  description: { type: String, required: true },
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
