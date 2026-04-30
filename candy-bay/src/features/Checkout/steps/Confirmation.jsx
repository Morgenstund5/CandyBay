import React from 'react'
import './confirmation.css'
import { Link, Links } from 'react-router'

function Confirmation() {
  return (
    <div className='confirmation-div'>
      <div className="order-conf">
        <h3>Order confirmed</h3>
        <span className="material-symbols-outlined check-circle">
          check_circle
        </span>
      </div>
      <div className='order-data'>
        <div className='order-id'>
          <span className="material-symbols-outlined docs">
            docs
          </span>
          <p>
            Order ID:
          </p>
          <span className='gen-data'>
            #CB-1023
          </span>
        </div>
        <div className='delivery'>
          <span className="material-symbols-outlined truck">
            delivery_truck_speed
          </span>
          <p>
            Estimated delivery:
          </p>
          <span className='gen-data'>
            2-3 days
          </span>
        </div>
      </div>
      
      <Link to={"/shop"} className='b-to-shop'>
        <span className="material-symbols-outlined bag">
          shopping_bag
        </span>
        <span>Back to shop</span>
      </Link>
    </div>
  )
}

export default Confirmation