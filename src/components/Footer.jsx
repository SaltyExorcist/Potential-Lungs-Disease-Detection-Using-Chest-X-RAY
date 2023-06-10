import React, { useState } from 'react';
import "./styles.css";

function Footer() {

  return (
    <div className="footer">
    <footer>
  <h3>Footer Title</h3>
  <div className="footer-links">
    <a href="/About">About Us</a>
    <a href="https://github.com/SaltyExorcist/Potential-Lungs-Disease-Detection-Using-Chest-X-RAY" target="_blank" rel="noopener noreferrer">Contribute</a>
    <a href="https://www.nndc.ac.in/" target="_blank" rel="noopener noreferrer">NNDC</a>
  </div>
  <p>© NNDC Computer Science 2023</p>
</footer>
 </div>
  );
}

export default Footer;
