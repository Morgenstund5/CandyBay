import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./cart.css"
import convertPrice from '../../utils/ConvertPrice'
import { PriceContext } from '../../context/PriceContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  const {productsInCart, deleteFromCart, incrementQuantity, decreaseQuantity} = useContext(CartContext)
  const {priceBCH} = useContext(PriceContext)
    
  return (
    <div className='cart-container'>
        <h1>Shopping Cart</h1>
        <div className='cart-products'>
            {
                productsInCart.map(product => (
                    <div className="product-row">
                        <div className="prod-cart-img" style={{ backgroundImage: `url(${product.bgImg})` }}></div>
                        <div className="prod-info">
                            <div className="prod-info-left">
                                <h3>{product.title}</h3>
                                <p>{product.category}</p>
                                <span>{(convertPrice(product.price, priceBCH) * product.quantity).toFixed(4)} BCH</span>
                                <div className='quantity'>
                                    <button className='increase' onClick={() => decreaseQuantity(product)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button className='decrease' onClick={() => incrementQuantity(product)}>+</button>
                                </div>
                            </div>
                            <div className="prod-info-right">
                                <FontAwesomeIcon icon={faTrash} className='trash' onClick={() => deleteFromCart(product)}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    
  )
}

export default Cart