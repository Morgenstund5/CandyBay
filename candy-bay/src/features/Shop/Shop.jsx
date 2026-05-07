import React, { useContext, useState } from 'react'
import purpleFlower from '../../assets/products/bg/purple-flower.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCartShopping, faCheck } from '@fortawesome/free-solid-svg-icons'
import './shop.css'
import products from '../../data/products'
import convertPrice from '../../utils/ConvertPrice'
import { PriceContext } from '../../context/PriceContext'
import { Link } from 'react-router'
import displayRating from '../../utils/DisplayRating'
import { CartContext } from '../../context/CartContext'

function Shop() {
  const {priceBCH} = useContext(PriceContext)
  const { addToCart } = useContext(CartContext)
  const [added, setAdded] = useState()

  const handleCart = (product) => {
    addToCart(product)
    setAdded(product)
    setTimeout(() => {
      setAdded()
    }, 2000)
  } 

  return (
    <div className='shop'>
      {products.map(product => (
          <Link className='product-box' key={product.id} to={`/product/${product.id}`}>
            <h2>{product.title}</h2>
            <span>{product.category}</span>
            {/*<span>{product.category}</span>*/}
            <div className="product-logo" style={{ backgroundImage: `url(${product.img})` }}></div>
            {/*<img src={product.img} className='product-logo'/>*/}
            <p>{displayRating(product.rating)}</p>
            <p>{convertPrice(product.price, priceBCH)} BCH</p>
            <div onClick={(e) => {
              e.preventDefault(); 
              e.stopPropagation()
              handleCart(product)
              }}>
              <FontAwesomeIcon icon={added === product ? faCheck : faCartShopping} className='cart'/>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Shop