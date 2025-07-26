const express = require('express');
const router = express.Router();
const Signup = require('../model/SignupModel');
const generateOTP = require('../util/generateOTP');

router.post('/send-otp', async (req, res) => {
  const { mobile } = req.body;

  if (!/^[6-9]\d{9}$/.test(mobile))
    return res.status(400).json({ message: 'Invalid mobile number' });

  const otp = generateOTP();
  const otpExpires = Date.now() + 5 * 60 * 1000; // 5 minutes expiry

  let user = await Signup.findOne({ mobile });
  if (user) {
    user.otp = otp;
    user.otpExpires = otpExpires;
  } else {
    user = new Signup({ mobile, otp, otpExpires });
  }

  await user.save();
  console.log(`OTP for ${mobile}: ${otp}`); // Replace with Twilio later

  res.status(200).json({ message: 'OTP sent successfully' });
});

router.post('/verify-otp', async (req, res) => {
  const { mobile, otp } = req.body;

  const user = await Signup.findOne({ mobile });
  if (!user) return res.status(404).json({ message: 'User not found' });

  if (user.otp !== otp)
    return res.status(400).json({ message: 'OTP mismatch' });

  if (Date.now() > user.otpExpires)
    return res.status(400).json({ message: 'OTP expired' });

  user.verified = true;
  user.otp = null;
  user.otpExpires = null;
  await user.save();

  res.status(200).json({ message: 'Mobile verified' });
});

module.exports = router;