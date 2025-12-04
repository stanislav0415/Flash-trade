import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>Welcome to Flash Trade</h1>
        <p>
          Flash Trade is the ultimate platform for buying, selling, and trading CS2 skins. 
          Designed for collectors and gamers alike, it offers a secure, fast, and intuitive experience.
        </p>

        <h2>Why Choose Flash Trade?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <strong>Secure Transactions:</strong> All trades are verified, ensuring safe and reliable transfers.
          </div>
          <div className="feature-item">
            <strong>Real-time Listings:</strong> Browse the latest skins instantly with our live updating marketplace.
          </div>
          <div className="feature-item">
            <strong>User-friendly Interface:</strong> A sleek and modern UI designed for both beginners and pros.
          </div>
          <div className="feature-item">
            <strong>Detailed Skin Info:</strong> See rarity, exterior, float values, and StatTrak status for every skin.
          </div>
          <div className="feature-item">
            <strong>Manage Your Balance:</strong> Add funds, track your spending, and buy skins effortlessly.
          </div>
        </div>

        <h2>How It Works</h2>
        <p>
          1. Create an account with your email and Steam Trade Link.<br/>
          2. Browse the marketplace or search for your favorite skins.<br/>
          3. Buy, sell, or trade securely with other users.<br/>
          4. Track your transactions and skin inventory in your profile.
        </p>

        <h2>Get Involved</h2>
        <p>
          Flash Trade is constantly evolving. Want to contribute or explore the code? Visit our{" "}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "} 
          repository.
        </p>
      </div>
    </div>
  );
}
