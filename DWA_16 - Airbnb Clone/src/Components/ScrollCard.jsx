// eslint-disable-next-line no-unused-vars
import React from "react"


/**
 * Renders a scrollable card with information about a specific item.
 * @param {Object} props - The props for the component.
 * @prop {ReactPropTypes}
 * @param {string} img - The URL of the image.
 * @param {number} rating - The rating of the item.
 * @param {number} reviewCount - The number of reviews for the item.
 * @param {string} country - The country of the item.
 * @param {string} title - The title of the item.
 * @param {number} price - The price of the item.
 * @returns {JSX.Element} The rendered card component.
 */

 export const ScrollCards = (props) => {
  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }
  
    return (
      <>
      <div className='Card'>
      {badgeText && <div className="card--badge">{badgeText}</div>}
          <img src={props.item.coverImg} className='card--image'/>
          <div className='card--stats'>
              <img  src='./src/assets/star.png' className='card--star'/>
              <span className="card--rating">{props.item.stats.rating}</span>
              <span className='Gray'>({props.item.stats.reviewCount}) *</span>
          </div>
          <>
              <span className='card--location'> {props.item.location}</span>
          </>
          <p className="card--title">{props.item.title}</p>
          <p className="card--price"><span className='Bold'>From ${props.item.price}</span> / person</p>
      </div>
      </>
    )
  }
