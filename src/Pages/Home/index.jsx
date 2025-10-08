import React from 'react'
import Banner from './Components/Banner'
import TrendingJob from './Components/TrendingJob'
import Resume from './Components/Resume'
import Interview from './Components/interview'
import Courses from './Components/Courses'
import Cookies from './Components/Cookies'

const Home = () => {
  return (
    <>
    <Cookies/>
     <Banner/>
     <TrendingJob/>
     <Resume/>
     <Courses/>
     <Interview/>
     
    </>
  )
}

export default Home
