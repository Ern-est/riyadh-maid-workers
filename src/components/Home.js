import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import BreakingNewsBanner from './BreakingNewsBanner'
const Home = () => {
  return (
    <div>
      <>
      <Navbar />
      <BreakingNewsBanner />
      <Homepage />
      </>
    </div>
  )
}

export default Home