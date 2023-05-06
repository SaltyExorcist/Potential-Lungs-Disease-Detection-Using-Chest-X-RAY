import React, { useRef, useState } from 'react';
import Chart from 'react-apexcharts'
import axios from 'axios';
import "./myCss.css";
import "./w3.css"

export default function Form() {
  
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [result, setResult] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', image);

    const response = await axios.post('http://localhost:5000/predict_disease', formData, {
      headers: { 'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With", },
    });
    
    setResult(response.data.result);
  };

  return (
    <div className="flex-container">
      <form className="flex-item-left w3-light-grey" onSubmit={handleSubmit}>
        <div>
          {image ?
          <img src={URL.createObjectURL(image)} alt="The X-RAY" style={{verticalAlign:top}}/>:
          <img src="upload_image.png" alt="The X-RAY" style={{verticalAlign:top}}/>
          }
        </div>
        <div className="w3-container Wbutton">
          <button className="w3-button w3-left w3-quarter w3-hover-blue w3-hover-text-white" >Submit</button>
          <input className="w3-button w3-center w3-rest w3-hover-purple w3-hover-text-white" type="file" onChange={handleImageChange} ref={inputRef}/>
          
          {/* <button className="w3-button w3-right w3-quarter w3-hover-red w3-hover-text-white" type="reset">Reset</button> */}
        </div>
      </form>
      <div className="flex-item-right">
        {result ?
          <div>
            <Chart
            className="w3-hide-medium"
            series={
                [result['Bacterial Pneumonia'],
                result['Corona Virus Disease'],
                result['Normal'],
                result['Tuberculosis'],
                result['Viral Pneumonia']]
              }
            type="donut"
            width="98%"
            options={{
              labels:['Bacterial Pneumonia',
                     'Corona Virus Disease', 
                     'Normal', 
                     'Tuberculosis', 
                     'Viral Pneumonia']
            }}
            />
            <Chart
            className="w3-hide-large"
            series={
                [result['Bacterial Pneumonia'],
                result['Corona Virus Disease'],
                result['Normal'],
                result['Tuberculosis'],
                result['Viral Pneumonia']]
              }
            type="pie"
            width="98%"
            options={{
              labels:['Bacterial Pneumonia',
                     'Corona Virus Disease', 
                     'Normal', 
                     'Tuberculosis', 
                     'Viral Pneumonia']
            }}
            />
          </div>
          : 
          <div>
            <Chart
            className="w3-hide-medium"
            series={[0,0,100,0,0]}
            type="donut"
            width="98%"
            options={{
              labels:['Bacterial Pneumonia',
                     'Corona Virus Disease', 
                     'Normal', 
                     'Tuberculosis', 
                     'Viral Pneumonia']}}
            />
            <Chart
            className="w3-hide-large"
            series={[0,0,100,0,0]}
            type="pie"
            width="98%"
            options={{
              labels:['Bacterial Pneumonia',
                     'Corona Virus Disease', 
                     'Normal', 
                     'Tuberculosis', 
                     'Viral Pneumonia']}}
            />
          </div>
        
      }
        
      </div>
      {/* <div>      
        {result && (
          <div className="result-container">
          <p>Bacterial Pneumonia: {result['Bacterial Pneumonia']}%</p>
          <p>Corona Virus Disease: {result['Corona Virus Disease']}%</p>
          <p>Normal: {result['Normal']}%</p>
          <p>Tuberculosis: {result['Tuberculosis']}%</p>
          <p>Viral Pneumonia: {result['Viral Pneumonia']}%</p>
        </div>
        )}
      </div> */}
    </div>
  )
}
