import React, { useState } from 'react';
import "./styles.css";
import Logo from './logo.png'

function Header() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    event.preventDefault();
    setShowCard(!showCard);
  };

  return (
    <header>
      <div className="logo">
		<img src={Logo}/>
    <h1><span className="logo-txt">MEDBOT</span></h1>
    </div>
		<ul>
			<li><a href="/" className="active">Home</a></li>
			<li><a href="/About">About us</a></li>
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

export default Header;
