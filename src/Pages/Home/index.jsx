import React from 'react'
import Banner from './Components/Banner'
import TrendingJob from './Components/TrendingJob'
import Resume from './Components/Resume'
import Interview from './Components/interview'
import Courses from './Components/Courses'

const Home = () => {
  return (
    <>
     <Banner/>
     <TrendingJob/>
     {/* <Resume/> */}
     <Courses/>
     <Interview/>
     
    </>
  )
}

export default Home
