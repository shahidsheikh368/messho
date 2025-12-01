import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Hello User 👋</h2>
        <p className="subtitle">To access your Meesho account</p>

            <Link to="/signup">
        <button className="signup-btn">  Sing Up </button>
            </Link>    

        <div className="divider"></div>

        <div className="profile-options">

            {/* <Link to="/signup">
          <button className="option-btn">My Orders</button>
            </Link> */}

            <Link to="/signup" className="option-btn">
  My Orders
</Link>

          <button className="option-btn delete">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
