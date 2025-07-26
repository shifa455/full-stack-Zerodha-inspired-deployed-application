import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const validateMobile = (number) => /^[6-9]\d{9}$/.test(number);
  const validateOtp = (code) => /^\d{6}$/.test(code);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!validateMobile(mobile)) {
      alert("Enter a valid Indian mobile number.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/send-otp", { mobile });
      setStep(2);
    } catch (error) {
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!validateOtp(otp)) {
      alert("Enter a valid 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/verify-otp", { mobile, otp });
      alert("🎉 Mobile verified successfully!");
      // Optionally redirect or show next screen here
    } catch (error) {
      alert("Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container">
      <div className="hero-container">
        <div className="form-section">
          <h1>Investing brokerage-free starts here.</h1>
          <p>Join 1.6 crore+ investors and traders.</p>

          {step === 1 ? (
            <form onSubmit={handleSendOtp}>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength="10"
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Sending OTP..." : "Continue"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}
        </div>

        <div className="platforms">
          <img src="media/images/kite-logo.svg" alt="Kite" />
          <img src="media/images/console.png" alt="Console" />
          <img src="media/images/account_open.svg" alt="Coin" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
