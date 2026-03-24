import React, { useState } from 'react'
import './components.css'
import logo from "./assets/logo-t.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faL } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [isDropdown, setIsDropdown] = useState(false)

    const elements = [
        {
            id: 1,
            title: "Shop",
            url: "",
        },
        {
            id: 2,
            title: "FAQ",
            url: "",  
        },
        {
            id: 3,
            title: "logo",
            url: "",
            src: logo
        },
        {
            id: 4,
            title: "Safety",
            url: "",  
        },
        {
            id: 5,
            title: "Contact",
            url: "",  
        },
    ]

    const handleDropdown = () => {
        isDropdown === true ? setIsDropdown(false) : setIsDropdown(true)
    }

  return (
    <nav className='nav-bar'>
        <div className='top-bar'>
            <button className='login-btn'>LOGIN</button>

            <div className='headers'>
                {
                elements.map((element) => {
                    return element.src ? <img className='nav-bar-logo' key={element.id} src={element.src} ></img> : <a className='link' key={element.id} href={element.url}>{element.title}</a>
                })
            }
            </div>
        
        <FontAwesomeIcon className='bars-icon' icon={faBars} onClick={()=> {
            handleDropdown()
        }}/>  {/* change state!!! */}
        </div>

        <div className='dropdown' id='dropdown'>
            <div className='links'>
            {
            elements.map((element) => {
                return element.src ? null : <a className={isDropdown ? 'link drop' : 'link drop-show'} key={element.id} href={element.url}>{element.title}</a>
            })
        }
        </div>
        </div>
    </nav>
  )
}

export default NavBar