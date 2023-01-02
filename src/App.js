import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Cv from "./components/pages/Cv.js";
import Contact from "./components/pages/Contact.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="cv" element={<Cv />} />
      </Routes>
    </div>
  );
}

export default App;