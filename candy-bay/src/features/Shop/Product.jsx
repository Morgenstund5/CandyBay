import React, { useContext, useEffect, useState } from 'react'
import products from '../../data/products'
import './product.css'
import { useParams } from 'react-router'
import convertPrice from '../../utils/ConvertPrice'
import { PriceContext } from '../../context/PriceContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCheck } from '@fortawesome/free-solid-svg-icons'
import displayRating from '../../utils/DisplayRating'
import { CartContext } from '../../context/CartContext'

function Product() {
  const {addToCart, deleteFromCart, productsInCart} = useContext(CartContext)
  const {priceBCH} = useContext(PriceContext)
  const params = useParams()
  const product = products.find(p => p.id === Number(params.productId)) // useParams() always returns strings

  const [added, setAdded] = useState()
  
    const handleCart = (product) => {
      addToCart(product)
      setAdded(product)
      setTimeout(() => {
        setAdded()
      }, 2000)
    }
  
  return (
    <div className='product-container'>
      <div className='product'>
        <div className="product_left-div" style={{ backgroundImage: `url(${product.bgImg})` }}>
          {/*<img src={product.bgImg} alt="" />*/}
        </div>
        <div className="product_right-div">
          <div className='right-div-upper-part'>
            <h1>{product.title}</h1>
            <h3>{product.subtitle}</h3>
            <p>{displayRating(product.rating)}</p>
          </div>
          <div className='right-div-middle-part'>
            <h2>Price: <span>{convertPrice(product.price, priceBCH)} BCH</span></h2>
          </div>
          <div className='right-div-bottom-part'>
            <p>
              {product.description}
            </p>
          </div>
          <button className="cart-div" onClick={() => handleCart(product)}>
            <FontAwesomeIcon icon={added ? faCheck : faCartShopping} />
            <span>{added ? "Added!" : "Add to Cart"}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product