import React, { useContext, useState } from 'react'
import bear from './assets/blue-bear.png'
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid, faAngleLeft,faAngleRight, faPlus} from '@fortawesome/free-solid-svg-icons'
import products from '../data/products'
import convertPrice from '../utils/ConvertPrice'
import { PriceContext } from '../context/PriceContext'
import displayRating from '../utils/DisplayRating'
import { Link } from 'react-router'

function Slider({currentIndex, setCurrentIndex}) {
  const {priceBCH} = useContext(PriceContext)
  const subProducts = products.slice(0, 5)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(null)

  const handleDirection = (dir) => {
    if(isAnimating) return

    setDirection(dir)
    setIsAnimating(true)
  }

  const handleAnimationEnd = () => {
    if(!isAnimating) return
    if(direction === "next") {
      setCurrentIndex(prev => prev !== 4 ? prev + 1 : 0)
    } else if(direction === "previous") {
      setCurrentIndex(prev => prev !== 0 ? prev - 1 : 4)
    }

    setIsAnimating(false)
    setDirection(null)
  }

  return (
    <div className='slider'>
      <FontAwesomeIcon icon={faAngleLeft} className='arrow left' onClick={() => handleDirection("previous")}/>
      <div className={`left-div ${isAnimating && "animate-toRight"}`}>
        <div className='product-name'>
          <h1>{(subProducts[currentIndex].title).toUpperCase()}</h1>
          <p>{(subProducts[currentIndex].subtitle).toUpperCase()}</p>
          <div className='rating'>
            {displayRating(subProducts[currentIndex].rating)}
          </div>
        </div>
      </div>
      <div className='img-container'>
        <FontAwesomeIcon icon={faAngleLeft} className=' arr' onClick={() => handleDirection("previous")}/>
        <img src={subProducts[currentIndex].img} alt="" className={`img ${isAnimating && "shrink"}`} onAnimationEnd={() => handleAnimationEnd()}/>
        <FontAwesomeIcon icon={faAngleRight} className=' arr' onClick={() => handleDirection("next")}/>
      </div>
      <div className={`right-div ${isAnimating && "animate-toLeft"}`}>
        <div className="product-price">
          <h2>{convertPrice(subProducts[currentIndex].price, priceBCH)} BCH</h2>
          <p>
            {subProducts[currentIndex].description}
          </p>
          <Link to={`product/${subProducts[currentIndex].id}`} className='link-slider'>
            <FontAwesomeIcon icon={faPlus} className='plus'/>
          </Link>
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleRight} className='arrow right' onClick={() => handleDirection("next")}/>
    </div>
  )
}

export default Slider