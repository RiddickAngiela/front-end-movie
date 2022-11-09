import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Description() {

  let {id}=useParams();
  const [filtered,setFiltered]=useState([])
  useEffect (()=>{
    fetch(`http://localhost:9292/movies/${id}`)
    .then ((res)=>res.json())
    .then ((movie)=>setFiltered(movie))
    console.log (filtered.Title)
  },[])
  return (
    <>

    <div className='card-des'>
      <img src={filtered.image} alt=" Movie Image"/>
      <h2 style={{color:'red'}}>TITLE :  {filtered.title}</h2>
      <h4>Release Date :  {filtered.date}</h4>
      <h4>Genre : {filtered.genre}</h4>
      <h4>Description :</h4>
      <p>{filtered.description}</p>
    </div>
    </>
  )

}

export default Description