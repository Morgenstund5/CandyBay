import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "./cart.css"
import convertPrice from '../../utils/ConvertPrice'
import { PriceContext } from '../../context/PriceContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router'
import calcTotalPrice from '../../utils/totalPrice'

function Cart() {
  const {productsInCart, deleteFromCart, incrementQuantity, decreaseQuantity, totalPrice, setTotalPrice} = useContext(CartContext)
  const {priceBCH} = useContext(PriceContext)

  useEffect(() => {
    setTotalPrice(calcTotalPrice(productsInCart, priceBCH))
  ,[productsInCart, deleteFromCart, incrementQuantity, decreaseQuantity]
  })
    
  return (
    <div className='cart-container'>
        <h1>Shopping Cart</h1>
        <div className='cart-products'>
            {
                productsInCart.length > 0 ?
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
                )) : <h4 className='no-products'>The shopping cart is empty.</h4>
            }
        </div>
        <div className='total-price'>
            Total: {totalPrice} BCH
        </div>
        <Link to={"/checkout"} className='checkout-btn'>
            Checkout
        </Link>
        <Outlet />
    </div>
    
  )
}

export default Cart