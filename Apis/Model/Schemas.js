const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  birthday: {
    type: Date,
    require: true,
  },
  joining: {
    type: Date,
    require: true,
  },
  shift: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
});

module.exports = Worker = mongoose.model("Worker", workerSchema);
