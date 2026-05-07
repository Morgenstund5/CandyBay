import React, { useContext, useState } from 'react'
import "./checkout.css"
import { CartContext } from '../../context/CartContext'
import AddressForm from './steps/AddressForm';
import Payment from './steps/Payment';
import Confirmation from './steps/Confirmation';
import Processing from './steps/Processing';
function Checkout() {
  const {totalPrice, productsInCart, productsCount} = useContext(CartContext)
  const [step, setStep] = useState(2)

  return (
    <div className='checkout-container'>
      {step === 1 && <AddressForm step={step} setStep={setStep}/>}
      {step === 2 && <Payment totalPrice={totalPrice} step={step} setStep={setStep}/>}
      {step === 3 && <Processing step={step} setStep={setStep}/>}
      {step === 4 && <Confirmation />}
    </div>  
  )
}

export default Checkout