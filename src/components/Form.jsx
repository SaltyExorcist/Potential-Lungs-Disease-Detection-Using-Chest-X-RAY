import React, { useRef, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import "./myCss.css";
import "./w3.css";

export default function Form() {
  
  const inputRef = useRef(null);
  const [image, setImage] = useState({ preview: '', raw: '' });
  const [result, setResult] = useState(null);
  
  const handleImageChange = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
     });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', image.raw);

    const response = await axios.post('http://localhost:5000/predict_disease', formData, {
      headers: { 'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With" },
    });
    
    setResult(response.data.result);
  };

  const handleReset = () =>{
    setImage({
      preview: '',
      raw: ''
    });
    setResult();
  }

  return (
    <div className="flex-container">
      <form className="flex-item-left w3-light-blue w3-topbar w3-bottombar w3-border-indigo" onSubmit={handleSubmit}>
        <div className='w3-panel w3-leftbar w3-border-indigo w3-blue'>
          <h2>Input Area: </h2>
        </div>
        <div>
          {image.preview ?
          <img src={image.preview} alt="The X-RAY" className='w3-round-xxlarge' style={{verticalAlign:top}}/>:
          <img src="upload_image.png" alt="The X-RAY" className='w3-round-xxlarge' style={{verticalAlign:top}}/>
          }
        </div>
        <div className="w3-container Wbutton">
          <input className="w3-button w3-left w3-quarter w3-hover-blue w3-hover-text-white" type='Submit' value='Submit'/>
          <input className="w3-button w3-center w3-half w3-hover-purple w3-hover-text-white" type="file" onChange={handleImageChange} ref={inputRef}/>
          <input className="w3-button w3-right w3-quarter w3-hover-red w3-hover-text-white" type="Reset" value="Reset" onClick={handleReset}/>
        </div>
      </form>
      <div className="flex-item-right w3-pale-green w3-topbar w3-bottombar w3-border-teal">
        <div className='w3-panel w3-leftbar w3-border-teal w3-light-green'>
          <h2>Result Area: </h2>
        </div>
        {result ?
          <div>
            <Chart
              className="w3-hide-medium w3-hide-small"
              series={
                [result['Bacterial Pneumonia'],
                 result['Corona Virus Disease'],
                result['Tuberculosis'],
                result['Viral Pneumonia'],
                result['Normal']]
              }
              type='polarArea'
              width="94%"
              options={{
                stroke: {
                  colors: ['#fff']
                },
                fill: {
                  opacity: 0.8
                },
                responsive: [{
                  breakpoint: 480,
                  options: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }],
                labels:['Bacterial Pneumonia',
                 'Corona Virus Disease',
                 'Tuberculosis', 
                 'Viral Pneumonia', 
                 'Normal']
              }}
            />
            <Chart
            className="w3-hide-large w3-hide-small"
            series={
                [result['Bacterial Pneumonia'],
                result['Corona Virus Disease'],
                result['Tuberculosis'],
                result['Viral Pneumonia'],
                result['Normal']]
              }
            type="donut"
            width="98%"
            options={{
              labels:['Bacterial Pneumonia',
                     'Corona Virus Disease',
                     'Tuberculosis', 
                     'Viral Pneumonia', 
                     'Normal']
            }}
            />
            <Chart
            className="w3-hide-large w3-hide-medium"
            series={
                [result['Bacterial Pneumonia'],
                result['Corona Virus Disease'],
                result['Tuberculosis'],
                result['Viral Pneumonia'],
                result['Normal']]
              }
            type="pie"
            width="98%"
            options={{
              labels:['Bacterial Pneumonia',
                     'Corona Virus Disease',
                     'Tuberculosis', 
                     'Viral Pneumonia', 
                     'Normal']
            }}
            />
          </div>
          : 
          <div>
            <Chart
              className="w3-hide-medium w3-hide-small"
              series={[0,0,0,0,100]}
              type='polarArea'
              width="98%"
              options={{
                stroke: {
                  colors: ['#fff']
                },
                fill: {
                  opacity: 0.8
                },
                responsive: [{
                  breakpoint: 480,
                  options: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }],
                labels:['Bacterial Pneumonia',
                 'Corona Virus Disease',
                 'Tuberculosis', 
                 'Viral Pneumonia', 
                 'Normal']
              }}
            />
            <Chart
            className="w3-hide-large w3-hide-small"
            series={[0,0,0,0,100]}
            type="donut"
            width="98%"
            options={{
              labels:['Bacterial Pneumonia',
                     'Corona Virus Disease',
                     'Tuberculosis', 
                     'Viral Pneumonia', 
                     'Normal']}}
            />
            <Chart
            className="w3-hide-large w3-hide-medium"
            series={[0,0,0,0,100]}
            type="pie"
            width="98%"
            options={{
              labels:['Bacterial Pneumonia',
                     'Corona Virus Disease', 
                     'Tuberculosis', 
                     'Viral Pneumonia',
                     'Normal']}}
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
