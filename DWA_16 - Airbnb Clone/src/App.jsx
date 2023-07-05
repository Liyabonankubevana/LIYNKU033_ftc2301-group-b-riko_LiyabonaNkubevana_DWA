// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Landing } from './Components/Landing'
import { Navbar } from './Components/Navbar'
import { ScrollCards } from './Components/ScrollCard'
import airbnbData from './data'

/**
 * This is the App() component.
 * @returns{JSX.Element}
 */

export default function App() {
  /**
   * Function that will map through the data.js and return card data
   * @returns {Array<JSX.Element>}
   */
  const renderCardData = () => {
    return airbnbData.map(item => (
      <ScrollCards
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    ));
  };

  // render the App component. 
  return (
    <>
      <Navbar />,
      <Landing />
      <section className='cards-list'>
        {renderCardData()}
      </section>
    </>
  )
}


