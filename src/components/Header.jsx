import React, { useState } from 'react';
import "./styles.css";
import axios from 'axios';
import Logo from './logo.png'

function Header() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [showCard, setShowCard] = useState(false);

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

  const handleContactClick = () => {
    event.preventDefault();
    setShowCard(true);
  };

  return (
    <header>
      <div className="logo">
		<img src={Logo}/>
    </div>
		<ul>
			<li><a href="/" className="active">Home</a></li>
			<li><a href="/About">About us</a></li>
			<li><a href="https://github.com/SaltyExorcist/Potential-Lungs-Disease-Detection-Using-Chest-X-RAY" target="_blank" rel="noopener noreferrer">Contribute</a></li>
			<li><a href="/" onClick={handleContactClick}>Contact us</a></li>
		</ul>
    {showCard && (
        <div className="card">
          <h3>Contact Information</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
          {/* Additional content of the card */}
        </div>
      )}
	</header>
  );
}

export default Header;
