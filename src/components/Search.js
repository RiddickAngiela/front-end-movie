import React from 'react'


function Search({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className='filter'>
      <input className='search' type='text' name='search' placeholder='Search by name' value={search} onChange={onSearchChange} />
      <select className='sort' onChange={onCategoryChange}>
        <option value='All'>All</option>
        <option value='horror'>Horror</option>
        <option value='Comedy'>Comedy</option>
        <option value='Drama'>Drama</option>
        <option value='Action'>Action</option>
        <option value='Mystery'>Mystery</option>
        <option value='Fantasy-Action'>Fantasy_Action</option>
        <option value='Fantasy-Advanture'>Fantasy_Adventure</option>
        <option value='Comic_Action'>Comic_Action</option>


      </select>
    </div>
  )
}

export default Search