import React, { useState } from 'react'
import "./faq.css"
import { faq } from '../../data/faq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
function Faq() {
  const [show, setShow] = useState([])

  const handleShowAnswer = (question) => {
    if(show.includes(question.id)) {
        setShow(prev => prev.filter(id => id != question.id))
    }
    else {
        setShow(prev => [...prev, question.id])
    }
  }

  return (
    <div className='faq-container'>
        <h3>Frequently Asked Questions</h3>
        <div className='questions-container'>
            {faq.map(q => (
                <div className="q-container">
                    <div className="q-top">
                        <p>{q.question}</p>
                        <FontAwesomeIcon icon={show.includes(q.id) ? faAngleUp: faAngleDown} className='angle' onClick={() => handleShowAnswer(q)}/>
                    </div>
                    {show.includes(q.id) && <p className='answer'>{q.answer}</p>}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq