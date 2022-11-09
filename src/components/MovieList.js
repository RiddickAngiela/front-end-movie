import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'

import Search from './Search'

function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/movies')
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data)
      })
  }, [])




  const [genre, setGenre] = useState("All")
  const [search, setSearch] = useState("")

  function handleGenreChange(event) {
    setGenre(event.target.value);
  }
  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  const moviesToDisplay = movies
    // genre
    .filter(
      (movie) => genre === "All" || movie.genre === `${genre}`
    )
    // search term
    .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  const displayMovies = moviesToDisplay.map((movie) => {
    return <Moviecard key={movie.id} movie={movie} />




  })











  return (

    <>



      <Search onCategoryChange={handleGenreChange} onSearchChange={handleSearchChange} search={search} />
      <div className='moviecontainer'>
        {displayMovies}
      </div>

    </>





  )


}

export default MovieList