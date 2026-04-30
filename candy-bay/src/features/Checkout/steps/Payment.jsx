import React, { useState } from 'react'
import "./payment.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'

function Payment({totalPrice, step, setStep}) {
  const address = "qz3x4k9p7s8d2f6h5j0l9n8m7p6q5r4s3t2u1v0wxy"
  const [copied, setCopied] = useState(false)

  const displayAddress = () => {
    const croppedAddress = `${address.slice(0,6)}...${address.slice(-6)}`
    return croppedAddress
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    console.log("Copied")
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  const handlePayment = () => {
    setStep(step + 1)
    console.log("Step: ", step)
  }

  return (
    <div className='payment-div'>
      <div className='order-total'>
        <p>Order total</p>
        <h3>{totalPrice} <span>BCH</span></h3>
      </div>
      <div className='qr-add'>
        <div className="surr">
          <div className='send-to'>
          {/*<FontAwesomeIcon icon={faQrcode} />*/}
          <span className="material-symbols-outlined">
            qr_code_scanner
          </span>
          <p>Send <span>{totalPrice}</span> BCH to:</p>
        </div>
        <div className='wallet-address'>
          <p>{displayAddress()}</p>
          <button className='copy' onClick={(e) => handleCopy()}>
            <span className="material-symbols-outlined">
              {copied ? "check" : "content_copy"}
            </span>
            <p>
              {copied ? "Copied!" : "Copy"}
            </p>
          </button>
        </div>
        </div>
        <div className='status-div'>
          <span className="material-symbols-outlined clock">
          schedule
          </span>
         <div className='right-status'>
          <span>Status:</span>
          <p>Waiting for payment...</p>
         </div>
        </div>
        <div className='payment-bottom'>
          <button onClick={(e) => handlePayment()}>
            <span className="material-symbols-outlined">
            send
            </span>  
            I've sent the payment
          </button>
          <p>
            <span className="material-symbols-outlined padlock">
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