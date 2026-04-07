import React from 'react'
import Slider from '../../components/Slider'
import './styles.css'

function Home({priceBCH}) {
  return (
    <div className='home'>
      <Slider priceBCH={priceBCH}/>
    </div>
  )
}

export default Home