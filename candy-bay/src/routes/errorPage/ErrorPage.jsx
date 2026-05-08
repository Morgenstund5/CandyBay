import React, { useEffect, useState } from 'react'
import "./error.css"
import { Link, useRouteError } from 'react-router'
import errorBg from "../../assets/error-page.jpg"
import hackerBg from "../../assets/hacker.png"
import { seized } from '../../data/seized'

function ErrorPage() {
  const error = useRouteError()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize) /* cleanup */
  })

  return (
    <div className='error-container' style={{
        backgroundImage: `url(${hackerBg})`
    }}>
          <div className="error-info">
            <p>
              {error.status} Error 
            </p>
            <p>
              { error.statusText === "Not Found" ? "Page Not Found" : error.statusText }
            </p>
          </div>
        <h3>This Hidden Site Has Been Seized</h3>
        <div className='reason'>
          <p>
            {isMobile ? seized.shortMotive : seized.motive}
          </p>
        </div>
        <div className='images'>
          <div className="fbi" style={{
            backgroundImage: `url(${seized.fbi})`
          }}></div>
          {!isMobile && (
            <>
              <div className="dea" style={{
                backgroundImage: `url(${seized.dea})`
              }}></div>
              <div className="ice" style={{
                backgroundImage: `url(${seized.ice})`
              }}></div>
            </>
          )}
        </div>
        <div className='l-cont'>
          <Link to={"shop"} className='checkout-btn'>
            Back to Shop
          </Link>
        </div>
    </div>
  )
}

export default ErrorPage