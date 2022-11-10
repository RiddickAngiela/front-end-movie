import React, { useState, useEffect } from 'react'
import './App.css';
// import ReviewCard from './components/ReviewCard';
import About from './components/About'
import Description from './components/Description';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import ReviewCard from './components/ReviewCard'

function App() {



  useEffect(() => {
    document.title = 'Movie-hub'
  })
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path={`/:id/reviews`} element={<ReviewCard />} /> 
        <Route path={`/:id`} element={<Description />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
