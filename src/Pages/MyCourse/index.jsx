import React from 'react'
import Banner from './components/Banner'
import Chatbot from '../Home/Components/Chatbot'
import OnlineCourse from './components/OnlineCourse'
import Faq from './components/Faq'
import PopularCourse from './components/PopularCourse'

const MyCourse = () => {
  return (
   <>
    <Banner/>
    <Chatbot/>
    <OnlineCourse/>
    <PopularCourse/>
    <Faq/>
   </>
  )
}

export default MyCourse
