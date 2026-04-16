import React, { useContext } from 'react'
import purpleFlower from '../../assets/products/bg/purple-flower.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons'
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
              addToCart(product)
              }}>
              <FontAwesomeIcon icon={faCartShopping} className='cart'/>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Shop