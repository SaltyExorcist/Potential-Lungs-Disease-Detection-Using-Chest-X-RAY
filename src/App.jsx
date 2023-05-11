import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
// import About from "./components/About";

function App() {

  return (
    <>
    <Header/>

    {/* <Router> */}
        {/* <Routes> */}
          {/* <Route exact path="/" element={<Form/>} /> */}
          {/* <Route path="/about" element={<About/>} /> */}
        {/* </Routes> */}
      {/* </Router> */}

    <Form/>
    <Footer/>
    {/* <About/> */}
    </>
  );
}

export default App;
