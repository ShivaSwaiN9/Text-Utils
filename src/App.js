import "./App.css";
import About from "./Components/About"; // Import the About component
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import statement

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Router>
        <div className="Container my-3">
          <Routes> {/* Updated to use <Routes> */}
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
