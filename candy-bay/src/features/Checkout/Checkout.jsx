import React, { useContext, useState } from 'react'
import "./checkout.css"
import { CartContext } from '../../context/CartContext'
import AddressForm from './steps/AddressForm';
import Payment from './steps/Payment';
function Checkout() {
  const {totalPrice, productsInCart, productsCount} = useContext(CartContext)
  const [step, setStep] = useState(1)

  return (
    <div className='checkout-container'>
      {step === 1 && <AddressForm step={step} setStep={setStep}/>}
      {step === 2 && <Payment />}
    </div>  
  )
}

export default Checkout