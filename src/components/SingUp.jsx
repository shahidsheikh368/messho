import React, { useState } from "react";
import "./SingUp.css";

export default function SignUp() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number:", phone);
    alert(`OTP will be sent to ${phone}`);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up / Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Phone Number
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </label>
          <button type="submit">Continue</button>
        </form>
        <p>
          By continuing, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
