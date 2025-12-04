import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="m-footer">

      <div className="m-footer-top">

        {/* 1️⃣ Shop Info */}
        <div className="m-footer-section">
          <h3>Meesho</h3>
          <p>Lowest prices, best quality shopping.</p>
        </div>

        {/* 2️⃣ Useful Links */}
        <div className="m-footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Become a Supplier</a></li>
            <li><a href="#">Meesho Blog</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        {/* 3️⃣ Customer Support */}
        <div className="m-footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* 4️⃣ Contact */}
        <div className="m-footer-section">
          <h4>Contact</h4>
          <p>Email: support@meesho.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="m-footer-bottom">
        © 2025 Meesho Clone — All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
