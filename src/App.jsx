import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
// import './styles.css';
import Form from './components/Form';

function App() {
  const inputRef =useState(null);

  const [file, setFile] = useState("");
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  }

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
    <Header/>
    
    <Form/>
    {/*<div>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <input type="file" onChange={handleFileChange} />
        <button className="btn" type="submit">Submit</button>
      </form>
      {result && (
        <div className="result-container">
        <p>Bacterial Pneumonia: {result['Bacterial Pneumonia']}%</p>
        <p>Corona Virus Disease: {result['Corona Virus Disease']}%</p>
        <p>Normal: {result['Normal']}%</p>
        <p>Tuberculosis: {result['Tuberculosis']}%</p>
        <p>Viral Pneumonia: {result['Viral Pneumonia']}%</p>
      </div>
      )} 
      </div>*/}
    </>
  );
}

export default App;
