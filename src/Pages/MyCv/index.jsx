import React from 'react'
import Banner from './components/Banner'
import Chatbot from '../Home/Components/Chatbot'
import BetterCV from './components/BetterCV'
import CvBuilder from './components/CvBuilder'


const MyCv = () => {
  return (
    <>
      <Banner/>
      <Chatbot/>
      <BetterCV/>
      <CvBuilder/>
      {/* <Customers/> */}
    </>
  )
}

export default MyCv
