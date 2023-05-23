import React, { useState } from 'react';
import "./styles.css";
import axios from 'axios';


function Footer() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:5000/predict_disease', formData, {
      headers: { 'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With", },
    });
    
    setResult(response.data.result);
  };

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
