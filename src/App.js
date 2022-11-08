import React, {useState, useEffect} from 'react'
 import './App.css';
// import ReviewCard from './components/ReviewCard';
import About from './components/About'
import Description from './components/Description';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import { Routes ,Route } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path={`/:id`} element={<ReviewCard />} /> */}
        <Route path={`/:id`} element={<Description />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
