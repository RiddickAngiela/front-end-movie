import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'


function Description() {
  
  let {id}=useParams();
  const [filtered,setFiltered]=useState([])
  const[reviews, setReviews]= useState([])
  const[seeReviews,setSeeReviews]=useState(false)
  const[addReview, setAddReview]= useState("")

  useEffect(()=>{
    fetch(`http://localhost:9292/movies/${id}/reviews`)
      .then((res) => res.json())
      .then((review) => setReviews(review));
  },[])
  //  console.log(reviews)
  function handleReviews(){
  // setSeeReviews((seeReviews)=== !seeReviews)
  setSeeReviews(!seeReviews)
  

  }



function handleDelete(id){
  fetch(`http://localhost:9292/reviews/${id}`,{
      method :'DELETE'
    })
       const filter= reviews.filter((review) => review.id !== id)

    setSeeReviews(filter);

}
 

  useEffect (()=>{
    fetch(`http://localhost:9292/movies/${id}`)
    .then ((res)=>res.json())
    .then ((movie)=>setFiltered(movie))

  },[])

  // function handleChange(e) {
  //   e.target.id === "rev"{
  //     setAddReview(e.target.value);  
  //   } 

  
  function handleSubmit(e){
    e.preventDefault()
    const formData= addReview
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then ((res)=>res.json())
      .then ((data)=> 
      console.log(data))
  }
  return (
    <>
      <div className="card-description">
        <img src={filtered.image} alt=" Movie Image" />
        <h2 style={{ color: "red" }}>TITLE : {filtered.title}</h2>
        <h4>Release Date : {filtered.date}</h4>
        <h4>Genre : {filtered.genre}</h4>
        <h4>Description :</h4>
        <p>{filtered.description}</p>
        <button className="card-btn" onClick={handleReviews}>
          {seeReviews ? "Hide Review" : "See Review"}
        </button>
        {seeReviews
          ? reviews.map((rev) => {
              return (
                <div className="rvw">
                  <p>{rev.comment}</p>

                  <button onClick={() => handleDelete(rev.id)} className="card-btn2">Delete</button>
                </div>
              );
            })
          : null}
        {seeReviews ? (
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input className="input"
                type="text"
                placeholder="Add your review..."
                id="rev"
                onChange={(e) => setAddReview(e.target.value)}
                value={addReview}
              />
              <button className="add-rv"type="submit">Add Review</button>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );

}

export default Description