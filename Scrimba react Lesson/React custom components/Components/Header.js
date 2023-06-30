import React from "react"

 export const Header = () => {
    return (
        <header>
        <nav className="Nav-bar">
            <img className="Image" src="./react-logo.png" alt="React logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header> 
    )
}