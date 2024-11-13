const express = require("express");
const router = express.Router();
const signupSchema = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware");

const { home, register, login } = require("../controllers/auth-controllers");

router.route("/").get(home);
// router.route("/register").get(register);
// router.route("/register").post(register);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);

module.exports = router;
