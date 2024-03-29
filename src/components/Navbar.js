import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import '../App.css'

// import Search from './Search'

function Navbar() {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)


  return (
    <div>
      <nav className='navbar'>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Movies Hub

          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home

              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Movies
              </NavLink>
            </li>

          </ul>
          {/* <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div> */}

          {/* <div className='left'>
                        <Search />
                    </div> */}


        </div>

      </nav>


    </div>





  )

}




export default Navbar