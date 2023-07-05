// eslint-disable-next-line no-unused-vars
import React from "react" 
import PhotoGrid from '../assets/photo-grid.png'



/**
 * Landing component of the airbnb site
 * 
 * @returns{JSX.Element} Renders the card.
 * 
 */

export const Landing = () => {
    return (
      <>
      <div className='Main--photo'>
        <img src={PhotoGrid} alt='Landing Page'/>
      </div>
      <div className='Main--text'>
        <h1>Online Experiences</h1>
        <p>Embark on a world of endless possibilities with a wide range of online experiences. From art workshops to virtual tours and live performances, these interactive activities offer convenient access to diverse interests, fostering connections and cultural exploration from home. Join now and discover the wonders of virtual connections from the confort of your home. </p>
      </div>
      </>
    )
  }
  