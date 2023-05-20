import React, { useState } from 'react';
import "./about_style.css";
import axios from 'axios';
import Logo from './logo.png'

function HeaderAbout() {
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
    <header>
      <div className="logo">
		<img src={Logo}/>
    </div>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/About" className="active">About us</a></li>
			<li><a href="https://github.com/SaltyExorcist/Potential-Lungs-Disease-Detection-Using-Chest-X-RAY" target="_blank" rel="noopener noreferrer">Contribute</a></li>
			<li><a href="/">Contact us</a></li>
		</ul>
	</header>
  );
}

export default HeaderAbout;
