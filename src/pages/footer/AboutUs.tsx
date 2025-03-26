import React from "react";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="page-container">
      <div className="header-banner">
        <h1>About Us</h1>
      </div>
      <div className="content">
        <h2>Who We Are</h2>
        <p>
          RED PC is a leading provider of custom-built gaming PCs, budget-friendly computer systems, refurbished devices, and repair services. 
          Located in Barangay Sta. Monica, Novaliches, Quezon City, we strive to deliver high-quality technology solutions for gamers and professionals alike.
        </p>

        <h2>EME LANG TO WALA PANG ABOUT US</h2>
        <p>
          BLA BLA BLA BLE BLE BLE HAP BLU BLU BLU BLU
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>Custom-built gaming PCs tailored to your needs</li>
          <li>Refurbished devices at budget-friendly prices</li>
          <li>Reliable PC repair and upgrade services</li>
          <li>High-quality accessories for gaming and work</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          At RED PC, we prioritize customer satisfaction, ensuring that every product meets our strict quality standards. 
          Whether you're a gamer, a student, or a professional, we have the perfect solution for your computing needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;