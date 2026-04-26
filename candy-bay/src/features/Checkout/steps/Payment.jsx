import React from 'react'
import "./payment.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'

function Payment() {
  return (
    <div className='payment-div'>
      <div className='order-total'>
        <p>Order total</p>
        <h3>0.0031 <span>BCH</span></h3>
      </div>
      <div className='qr-add'>
        <div className='send-to'>
          {/*<FontAwesomeIcon icon={faQrcode} />*/}
          <span class="material-symbols-outlined">
          qr_code_scanner
          </span>
          <p>Send 0.0031 BCH to:</p>
        </div>
        <div className='wallet-address'>
          <p>qz3fk23...6psf32</p>
          <button className='copy'>
            <span class="material-symbols-outlined">
            content_copy
            </span>
            <p>Copy</p>
          </button>
        </div>
        <div className='status-div'>
          <span class="material-symbols-outlined clock">
          schedule
          </span>
         <div className='right-status'>
          <span>Status:</span>
          <p>Waiting for payment...</p>
         </div>
        </div>
        <div className='payment-bottom'>
          <button>
            <span class="material-symbols-outlined">
            send
            </span>  
            I've sent the payment
          </button>
          <p>
            <span class="material-symbols-outlined padlock">
            lock
            </span>
            Your payment is secure and encrypted.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Payment