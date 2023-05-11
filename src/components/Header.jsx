import React from 'react';
import './w3.css';
import './myCss.css';
// import { a } from 'react-router-dom';

export default function Header() {
  function myFunction(){
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  return (
    <header className=''>
      <div className="w3-bar w3-indigo">
        <h1 className="w3-bar-item logo">MedBot</h1>
        <div className="space">
          <a href="/" className="w3-bar-item w3-buthrefn w3-hover-blue w3-hide-small">Home</a>
          <a href="/about" className="w3-bar-item w3-buthrefn w3-hover-blue w3-hide-small">About</a>
          <a href="javascript:void(0)" className="w3-bar-item w3-buthrefn w3-right w3-hide-large w3-hide-medium" onClick={myFunction}>&#9776;</a>
        </div>
      </div>
      
      <div id="demo" className="w3-bar-block w3-indigo w3-hide w3-hide-large w3-hide-medium">
        <a href="/" className="w3-bar-item w3-buthrefn w3-hover-blue text-right">Home</a>
        <a href="/" className="w3-bar-item w3-buthrefn w3-hover-blue text-right">About</a>
      </div>
    </header>
  )
}