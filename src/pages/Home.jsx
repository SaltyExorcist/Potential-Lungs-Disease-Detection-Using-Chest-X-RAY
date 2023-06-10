import React, { useState,useEffect } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles.css';
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(49, 106, 116, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(49, 106, 116, 1)"
  }
};

function Home() {
  const[loading,setLoading]=useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },5000)
  },[])


  return (
    <div className="App">
      {
        loading ? 
      <div className="motion-container">
        <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
    </div>
      :
      <body>
      <Header/>
      <Form/>
      <Footer/>
      </body>
      }
      </div>
  );
}

export default Home;
