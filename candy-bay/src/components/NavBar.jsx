import React, { useContext, useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faL } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import features from '../data/features'
import { CartContext } from '../context/CartContext'

function NavBar() {
    const [isDropdown, setIsDropdown] = useState(false)
    const { productsCount } = useContext(CartContext)

    
    const handleDropdown = () => {
        isDropdown === true ? setIsDropdown(false) : setIsDropdown(true)
    }

  return (
    <nav className='nav-bar'>
        <div className='top-bar'>
            
            <Link to="cart">
                <span className="material-symbols-outlined">
                    shopping_cart<span className='number-of-items'>{productsCount}</span>
                </span>
            </Link>
            <div className='headers'>
                {
                features.map((feature) => {
                    return feature.src ? 
                    <Link to={feature.url}>
                        <img className='nav-bar-logo' key={feature.id} src={feature.src} ></img>
                    </Link> :
                    <Link className='link' key={feature.id} to={feature.url}>{feature.title}</Link>
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
                    return feature.src ? 
                    null :
                    <Link className='link drop-show' key={feature.key} to={feature.url}>{feature.title}</Link>
                })
            }
                </div>
            </div>
        )}
        
    </nav>
  )
}

export default NavBar