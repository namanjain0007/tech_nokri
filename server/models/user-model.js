const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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

// json web token (JWT)
// json web token (JWT)
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(), // User ID
        email: this.email, // Email
        username: this.username, // Username
        mobile: this.mobile, // Mobile
        technology: this.technology, // Technology (optional)
        experience: this.experience, // Experience (optional)
        type: this.type, // Type
        branch: this.branch, // Branch (optional)
        courseList: this.courseList, // Course List (optional)
        photo: this.photo, // Photo (optional)
      },
      "yourSecretKey123", // Secret key (change it to a stronger key in production)
      {
        expiresIn: "30d", // Token expiry time (30 days in this case)
      }
    );
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Error generating token"); // Optional: re-throw error
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
