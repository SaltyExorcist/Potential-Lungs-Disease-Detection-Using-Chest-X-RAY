import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
