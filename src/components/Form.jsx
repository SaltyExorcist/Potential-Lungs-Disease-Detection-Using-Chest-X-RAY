import { useRef, useState } from 'react';
import "./styles.css";
import axios from 'axios';
import PDFReport from './PDFReport';

function Form() {
  // const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const [image, setImage] = useState({ preview: '', raw: '' });
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

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

    const response = await axios.post('https://potential-lungs-disease-detection-using-chest-x-ray.vercel.app/predict_disease', formData, {
      headers: { 'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With" },
    });
    
    setResult(response.data.result);
  };

  const [modal,setModal] = useState(false);

   const handleReset = () =>{
     setImage({preview:'', raw:''});
     setName('');
     setAge('');
     setHeight('');
     setWeight('');
     setModal(false);

     if (inputRef.current) {
      inputRef.current.value = null;
    }
   };

  return (
    <>
    <div className="form-container">
      <div className="form-card">
        <form onSubmit={handleSubmit} className='new-item-form'>
          <div>
            <label>Name:</label>
            <input type="text" value={name} required onChange={handleNameChange} />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" value={age} required onChange={handleAgeChange} />
          </div>
          <div>
            <label>Height:</label>
            <input type="number" value={height} required placeholder="in cm" onChange={handleHeightChange} min={50}/>
          </div>
          <div>
            <label>Weight:</label>
            <input type="number" value={weight} required placeholder="in kg" onChange={handleWeightChange} min={3}/>
          </div>
          <input type="file" id="files" onChange={handleImageChange} ref={inputRef} required/>
          <button className="btn" onClick={()=>setModal(true)} type="submit" value='Submit'>Submit</button>
        </form>
      </div> 
    </div>
    {result && modal===true && image.preview &&(
        <div className='backshadow'>
          <div className='custom-modal'>
            <span className="close" onClick={()=>setModal(false)}>&times;</span>
            
            <div className=' flex-container'>
              <div className='flex-item-left flex-container'>
                <img className='preViewimg' src={image.preview} alt="The X-RAY"/>
                <div className="rstbtn"><button onClick={handleReset}>Reset</button></div>
              </div>
              <div className="result-container flex-item-right">
                <p>Bacterial Pneumonia: {result['Bacterial Pneumonia']}%</p>
                <p>Corona Virus Disease: {result['Corona Virus Disease']}%</p>
                <p>Normal: {result['Normal']}%</p>
                <p>Tuberculosis: {result['Tuberculosis']}%</p>
                <p>Viral Pneumonia: {result['Viral Pneumonia']}%</p>
                <PDFReport result={result} name={name} age={age} height={height} weight={weight}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
