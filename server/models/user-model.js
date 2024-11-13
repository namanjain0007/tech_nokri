const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    // required: true,
  },
  date: {
    type: String,
    required: false,
  },
  technology: {
    type: String,
    required: false,
  },
  experience: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: false,
  },
  courseList: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
