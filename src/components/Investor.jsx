import React from "react";
import "./Investor.css"; // We'll style it separately

export default function Investor() {
  return (
    <div className="investor-page">
      {/* Hero Section */}
      <section className="investor-hero">
        <h1>Investor Relations</h1>
        <p>
          Welcome to Meesho’s Investor Relations page. Here, you can find our
          financial performance, annual reports, and company updates.
        </p>
      </section>

      {/* Financial Highlights */}
      <section className="financial-highlights">
        <h2>Financial Highlights</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Revenue</h3>
            <p>$1.2B</p>
          </div>
          <div className="card">
            <h3>Net Profit</h3>
            <p>$250M</p>
          </div>
          <div className="card">
            <h3>Market Cap</h3>
            <p>$5B</p>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="reports">
        <h2>Annual Reports</h2>
        <ul>
          <li><a href="#">2024 Annual Report (PDF)</a></li>
          <li><a href="#">2023 Annual Report (PDF)</a></li>
          <li><a href="#">2022 Annual Report (PDF)</a></li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="investor-contact">
        <h2>Contact Investor Relations</h2>
        <p>Email: <a href="mailto:investors@meesho.com">investors@meesho.com</a></p>
        <p>Phone: +91 12345 67890</p>
      </section>
    </div>
  );
}
