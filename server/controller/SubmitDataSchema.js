const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submitSchema = new Schema({
  name: String,
  seconds: Number,
  minutes: Number,
  hours: Number,
  date: String,
});

module.exports = submitSchema;
