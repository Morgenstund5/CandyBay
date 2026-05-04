import React, { useEffect, useState } from 'react'
import './processing.css'

function Processing({ step, setStep }) {
  const [status, setStatus] = useState("Confirming transaction...")
  useEffect(() => {
    setTimeout(() => {
        setStatus("Waiting for six confirmations in the blockchain...")
    }, 2000)
    setTimeout(() => {
        setStep(step + 1)
    }, 5000)
  }, [])
  return (
    <div className='processing-div'>
        <span className='loader-x'></span>
        <h3>{status}</h3>
    </div>
  )
}

export default Processing