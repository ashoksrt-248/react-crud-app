
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import NoPage from "./Components/Pages/NoPage";
import NavbarPage from "./Components/Layout/NavbarPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
      
        {/* <marquee><h1>Ashok Amara</h1></marquee> */}
             
        
        
          <NavbarPage />   
        
    <BrowserRouter>
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
      </div>
    
  );
}

export default App;
