import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Welpage from "./components/Welpage";
import About from "./components/About";
import Contact from "./components/Contact";
import TextUtil from "./components/txtUtiLs/TextUtil";
import ToDo from "./components/toDoList/todo";
import Alert from "./components/Alert";
import Home from "./components/Home";
import RanPassGen from "./components/PassGen/RanPassGen";
import './css/index.css'
import './css/Navbar.css'
import './css/welpage.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (mssge, type) => {
    setAlert({
      msg: mssge,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {

    const navBar = document.getElementById('logo')
    const nAv = document.getElementById('nanav')

    if (mode === 'light') {
      setMode('dark');
      showAlert("Darkmode is now Enabled", "success");
      document.body.style.background = 'var(--dark)';
      document.body.style.color = 'var(--light)';
      navBar.style.color = 'var(--light)';
      nAv.style.borderBottom = '2px solid var(--light-op)';
      document.getElementById('TextArea1').style.backgroundColor = 'var(--dark)';
    }
    else {
      setMode('light');
      showAlert("Lightmode is now Enabled", "success");
      document.body.style.background = 'var(--light)';
      document.body.style.color = 'var(--dark)';
      navBar.style.color = 'var(--dark)';
      nAv.style.borderBottom = '2px solid var(--dark-op)';
      document.getElementById('TextArea1').style.backgroundColor = 'var(--light)';
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Welpage />} />
          <Route exact path="/home" element={<Home mode={mode}/>} />
          <Route exact path="/ranPass" element={<RanPassGen mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/t-u" element={<TextUtil heading="Text-Utility" showAlert={showAlert} mode={mode} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/to-do" element={<ToDo mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
