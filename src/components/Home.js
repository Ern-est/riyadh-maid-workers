import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import BreakingNewsBanner from './BreakingNewsBanner'
import ScrollToTopButton from './ScrollToTopButton'
import Footer from './Footer'
import './Home.css'
const Home = () => {
  return (
    <div className='bc'>
      <>
      <Navbar />
      <BreakingNewsBanner />
      <Homepage />
      <ScrollToTopButton />
      <Footer />
      </>
    </div>
  )
}

export default Home