// eslint-disable-next-line no-unused-vars
import React from "react"


function NavBar() {
    return(
        <nav className="Nav-bar">
              <img className="Image" src="./react-logo.png" alt="React logo" />
              <ul className="nav-items">
                  <li><a>Pricing</a></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
              </ul>
          </nav>
      
    )
} 

export default NavBar