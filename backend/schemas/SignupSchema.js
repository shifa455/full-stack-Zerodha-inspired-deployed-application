const { Schema } = require("mongoose");
const SignupSchema = new Schema({
  mobile: String,
  otp: String,
  otpExpires: Date,
  verified: Boolean,
});

module.exports = { SignupSchema };
