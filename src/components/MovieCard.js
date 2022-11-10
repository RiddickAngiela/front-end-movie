import React from 'react'
import { NavLink } from 'react-router-dom'

function Moviecard({ movie }) {
  const { title, genre, date, image, description, id } = movie
  const placeholderImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAyYYSbn7wzGWOB1QkIe_R5Y-EtjN7a8uNVg&usqp=CAU"

  const onImageError = (e) => {
    e.target.src = placeholderImage
  }
  return (
    <div>
      <div className='card'>
        <img src={image ? image : placeholderImage} alt="" onError={onImageError} />
        <h2 className='card-elements'>TITLE :  {title}</h2>
        <h3 className='card-elements'>GENRE: {genre}</h3>
        <h4 className='card-elements'>RELEASE DATE :{date}</h4>
        <div className='buttons'>
        
          <NavLink to={`/` + id} ><button className='card-btn'>Read Description</button></NavLink>
        </div>

      </div>
    </div>
  )
}

export default Moviecard