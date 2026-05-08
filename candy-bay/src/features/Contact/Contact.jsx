import React from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Contact() {
  return (
    <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-data">
            <h4>
                Developed by:
            </h4>
            <a href='https://www.linkedin.com/in/emiliano-pesquedua-47342930a/'>
                <FontAwesomeIcon icon={faLinkedin} /> 
                <span>
                    Emiliano Pesquedua
                </span>
            </a>
        </div>
    </div>
  )
}

export default Contact