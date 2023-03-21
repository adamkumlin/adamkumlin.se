import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Cv from "./components/pages/Cv.js";
import Contact from "./components/pages/Contact.js";
import Privacy from "./components/pages/Privacy.js";
import LogIn from "./components/pages/LogIn.js";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="cv" element={<Cv />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="login" element={<LogIn/>} />
        <Route path="projects" element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;