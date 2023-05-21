import React, { useState } from 'react';
import "./styles.css";
import axios from 'axios';
import PDFReport from './PDFReport';

function Form() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
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
    <div className="form-container">
      <form onSubmit={handleSubmit} className='new-item-form'>
      <div>
    <label>Name:</label>
    <input type="text" value={name} onChange={handleNameChange} />
  </div>
  <div>
    <label>Age:</label>
    <input type="number" value={age} onChange={handleAgeChange} />
  </div>
  <div>
    <label>Height:</label>
    <input type="text" value={height} onChange={handleHeightChange} />
  </div>
  <div>
    <label>Weight:</label>
    <input type="text" value={weight} onChange={handleWeightChange} />
  </div>
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
        <PDFReport result={result} name={name} age={age} height={height} weight={weight}/>
      </div>
      )} 
    </div>
  );
}

export default Form;
