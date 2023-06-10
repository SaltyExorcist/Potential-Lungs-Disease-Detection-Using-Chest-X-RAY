import React, { useState } from 'react';
import "./about_style.css";
import Logo from './logo.png'

function HeaderAbout() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    event.preventDefault();
    setShowCard(!showCard);
  };

  return (
    <header>
      <div className="logo">
		<img src={Logo}/>
    <h1><span className="logo-txt">MedBot</span></h1>
    </div>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/About" className="active">About us</a></li>
			<li><a href="https://github.com/SaltyExorcist/Potential-Lungs-Disease-Detection-Using-Chest-X-RAY" target="_blank" rel="noopener noreferrer">Contribute</a></li>
			<li><a href="/" onClick={toggleCard}>Contact us</a></li>
		</ul>
    {showCard && (
        <div className="card">
          <h3>Contact Information</h3>
          <p>Email:
          <a href="mailto:infoincorp26@gmail.com">infoincorp26@gmail.com</a>
          </p>
          <p>Phone:<a href="Tel: +91 123-456-7890">+91 123-456-7890</a></p>
          {/* Additional content of the card */}
        </div>
      )}
	</header>
  );
}

export default HeaderAbout;
