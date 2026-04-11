import React, { useContext } from 'react'
import purpleFlower from '../../assets/products/bg/purple-flower.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './shop.css'
import products from '../../data/products'
import convertPrice from '../../utils/ConvertPrice'
import { PriceContext } from '../../context/PriceContext'

function Shop() {
  const {priceBCH} = useContext(PriceContext)

  return (
    <div className='shop'>
      {products.map(product => (
        <div className='product-box' key={product.id}>
        <h2>{product.title}</h2>
        <img src={product.img} className='product-logo'/>
        <p>{convertPrice(product.price, priceBCH)}</p>
        <div>
          <FontAwesomeIcon icon={faCartShopping} className='cart'/>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Shop