import React, { useState } from 'react'
import Slider from '../../components/Slider'
import './styles.css'
import { useOutletContext } from "react-router";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='home'>
      <Slider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
    </div>
  )
}

export default Home