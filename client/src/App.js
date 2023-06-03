import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from './Views/Landing/LandingPage'
import Home from './Views/Home/Home';
import CreateActivity from "./Views/FormActivity/CreateActivity";
import Detail from './Views/DetailCountry/DetailCountry';
import About from "./Views/About/About";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error"; 
import NavBar from "./Components/NavBar/NavBar";
import Game from './Views/Game/Game'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateActivity />} />
        <Route path="/game" element={<Game />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error />} /> 
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
