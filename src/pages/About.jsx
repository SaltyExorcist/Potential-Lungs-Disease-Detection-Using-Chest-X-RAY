import React, { useState } from 'react';
import axios from 'axios';
import HeaderAbout from '../components/HeaderAbout';
import FooterAbout from '../components/FooterAbout';

function About() {
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
    <>
    <div>
      <HeaderAbout/>
      <h2><span className="tel1">About</span> <span className="tel2">Medbot</span></h2>
<p className="about-paragraph">
Medbot is an artificial intelligence-based initiative. For the Model, we employ a deep learning process such as CNN and some advanced variants of CNN, and Python for the back-end. Front end software also uses React and Python.This is a senior year college assignment.

Some of the files are written in the 'ipynb' format because they were created using 'Google colab'. We have included a link to the Google colab notebook in each notebook so that you can download the 'py' format for use.<br/>

Collaborator :- <br/>

Rahul Biswas(<a href="https://github.com/ninja-codes-droid" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
Subhrojoyti Neogi(<a href="https://github.com/SaltyExorcist" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
Pranab Kumar Mondal(<a href="https://github.com/Lucifer-P13" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
Dipak Giri(<a href="https://github.com/dipakgiri17" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
Rhydam Bose(<a href="https://github.com/Rhydam-Jr001" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
<br/><br/>

												
</p>  <p className="about-para"> ~~~ Netaji Nagar Day Collage
                                                                                                                Computer Science Department(2023)
</p>
      <FooterAbout/>
      </div>
      </>
  );
}

export default About;
