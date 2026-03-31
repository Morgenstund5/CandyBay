import React from 'react'
import bear from './assets/blue-bear.png'
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid, faAngleLeft,faAngleRight, faPlus} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function Slider() {
  return (
    <div className='slider'>
      <FontAwesomeIcon icon={faAngleLeft} className='arrow left'/>
      <div className="left-div">
        <div className='product-name'>
          <h1>PRODUCT TITLE</h1>
          <p>Brief description</p>
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
        <FontAwesomeIcon icon={faAngleLeft} className=' arr'/>
        <img src={bear} alt="" className='img'/>
        <FontAwesomeIcon icon={faAngleRight} className=' arr'/>
      </div>
      <div className="right-div">
        <div className="product-price">
          <h2>0.00021 BCH / 0.0802 ETH</h2>
          <p>
            Product description. Brief pitch sale. How much it contains, etc.
            Product description. Brief pitch sale. How much it contains, etc.
          </p>
          <FontAwesomeIcon icon={faPlus} className='plus'/>
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleRight} className='arrow right'/>
    </div>
  )
}

export default Slider