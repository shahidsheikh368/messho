import React from "react";
import "./Supplier.css";
import SupplierImg from "../assets/img/Desktop-Pic-new.png"; // 👈 add any image of delivery box person

export default function Supplier() {
  return (
    <div className="supplier-container">

      {/* Hero Section */}
      <section className="supplier-hero">
        <div className="supplier-left">
          <h1>Sell Online to Crores of Customers<br />at <span>0% Commission</span></h1>
          <p>Become a Meesho supplier and grow your business online.</p>
          <p>✓ Don’t Worry — No GSTIN required for unregistered businesses.</p>
          <button className="start-btn">Start Selling</button>
        </div>
        <div className="supplier-right">
          <img src={SupplierImg} alt="Supplier" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="supplier-stats">
        <div>
          <h2>Lakhs of</h2>
          <p>Sellers trust Meesho to sell online</p>
        </div>
        <div>
          <h2>Crores of</h2>
          <p>Customers buying across India</p>
        </div>
        <div>
          <h2>Thousands of</h2>
          <p>Services to process orders quickly</p>
        </div>
        <div>
          <h2>Hundreds of</h2>
          <p>Categories to sell online</p>
        </div>
      </section>

      {/* Why Suppliers Love Section */}
      <section className="supplier-love">
        <h2>Why Suppliers Love Meesho</h2>
        <div className="love-grid">
          <div className="love-card">
            <h3>0% Commission Fee</h3>
            <p>Suppliers enjoy 100% profit without any commission on Meesho.</p>
          </div>
          <div className="love-card">
            <h3>Penalty-free Orders</h3>
            <p>Cancel or delay orders without penalties and grow stress-free.</p>
          </div>
          <div className="love-card">
            <h3>Growth for Every Supplier</h3>
            <p>From small businesses to large brands — everyone can grow here.</p>
          </div>
          <div className="love-card">
            <h3>Ease of Doing Business</h3>
            <p>Quick payments, easy returns, and Meesho delivery support.</p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="supplier-rewards">
        <h2>Exclusive Supplier+ Rewards</h2>
        <p>Get amazing rewards and visibility benefits for your first 30 days!</p>

        <div className="reward-grid">
          <div className="reward-card">
            <h3>Free visibility worth ₹5000</h3>
            <p>Promote your products to more buyers and boost sales instantly.</p>
          </div>
          <div className="reward-card">
            <h3>No Order Cancellation Charges</h3>
            <p>No penalties or charges for first-time sellers.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="supplier-cta">
        <h2>Start Selling Today</h2>
        <p>Grow your business with India’s fastest-growing online marketplace.</p>
        <button className="start-btn">Register as Supplier</button>
      </section>

    </div>
  );
}
