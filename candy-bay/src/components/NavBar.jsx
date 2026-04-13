import React, { useState } from 'react'
import './navbar.css'
import logo from "./assets/logo-t.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faL } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'

function NavBar() {
    const [isDropdown, setIsDropdown] = useState(false)

    const features = [
        {
            id: 1,
            title: "Shop",
            url: "shop",
        },
        {
            id: 2,
            title: "FAQ",
            url: "",  
        },
        {
            id: 3,
            title: "logo",
            url: "/",
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
                features.map((feature) => {
                    return feature.src ? <Link to={feature.url}><img className='nav-bar-logo' key={feature.id} src={feature.src} ></img></Link> : <Link className='link' key={feature.id} to={feature.url}>{feature.title}</Link>
                })
            }
            </div>
            
        <FontAwesomeIcon className='bars-icon' icon={faBars} onClick={()=> {
            handleDropdown()
        }}/>  {/* change state!!! */}
        </div>

        {isDropdown && (
            <div className='dropdown' id='dropdown'>
            <div className='links'>
            {
            features.map((feature) => {
                 return feature.src ? null : <a className='link drop-show' key={feature.key} href={feature.url}>{feature.title}</a>
            })
        }
            </div>
        </div>
        )}
    </nav>
  )
}

export default NavBar