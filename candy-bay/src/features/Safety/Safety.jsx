import React from 'react'
import "./safety.css"
import comp from "../../assets/comp-r.png"

function Safety() {
  return (
    <div className='safety-container'>
        <h3>MDMA Safety Guide</h3>
        <div className='guide'>
            <p>
                When taking MDMA, it is recommended not 
                to exceed a maximum dose of 1.5 mg MDMA 
                per kg bodyweight for men and 1.3 mg MDMA 
                per kg bodyweight for women. In general, 
                a dose of 120 mg should not be exceeded. 
                After ingestion, be sure to hydrate sufficiently.
                Only obtain MDMA from trustworthy sources.
            </p>
            <img src={comp} />
        </div>
    </div>
  )
}

export default Safety