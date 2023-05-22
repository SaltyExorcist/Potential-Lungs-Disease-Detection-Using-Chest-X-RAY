import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./components/styles.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function App() {

  return (
    <div>
   <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
