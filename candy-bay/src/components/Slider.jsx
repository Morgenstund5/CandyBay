import React, { useState } from 'react'
import bear from './assets/blue-bear.png'
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid, faAngleLeft,faAngleRight, faPlus} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import products from '../data/products'

function Slider({priceBCH, currentIndex, setCurrentIndex}) {
  const subProducts = products.slice(0, 5)

  const handleIndex = (direction) => {
    if(direction === "next") {
      if(currentIndex != 4) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    } else {
      if(currentIndex != 0) {
        setCurrentIndex(currentIndex - 1)
      } else {
        setCurrentIndex(4)
      }
    }
  }

  const convertPrice = (price) => {
    const productPrice = (price / priceBCH).toFixed(4)
    if (priceBCH === null) {
      return <p className='loader'></p>
    }
    return <>{productPrice} BCH</>
  }

  return (
    <div className='slider'>
      <FontAwesomeIcon icon={faAngleLeft} className='arrow left' onClick={() => handleIndex("previous")}/>
      <div className="left-div">
        <div className='product-name'>
          <h1>{(subProducts[currentIndex].title).toUpperCase()}</h1>
          <p>{(subProducts[currentIndex].subtitle).toUpperCase()}</p>
          <div className='rating'>
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarRegular} />
          </div>
        </div>
      </div>
      <div className='img-container'>
        <FontAwesomeIcon icon={faAngleLeft} className=' arr' onClick={() => handleIndex("previous")}/>
        <img src={subProducts[currentIndex].img} alt="" className='img'/>
        <FontAwesomeIcon icon={faAngleRight} className=' arr' onClick={() => handleIndex("next")}/>
      </div>
      <div className="right-div">
        <div className="product-price">
          <h2>{convertPrice(subProducts[currentIndex].price)}</h2>
          <p>
            {subProducts[currentIndex].description}
          </p>
          <FontAwesomeIcon icon={faPlus} className='plus'/>
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleRight} className='arrow right' onClick={() => handleIndex("next")}/>
    </div>
  )
}

export default Slider