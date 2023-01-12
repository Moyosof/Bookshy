import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assest/Layer_1.png'
import bookshy from '../../assest/Bookshy.png'
import hambugger from '../../assest/Vector.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [isActive,setIsActive] = useState(true)

  const handleToggle = () => {
    if(isActive) {
      setIsActive(false)
    }else {
      setIsActive(true)
    }
  }

  return (
    <div className='logo-nav'>
        <div className='logo'>
            <img className='logo-img' src={logo} alt='logo' />
            <img className='bookshy' src={bookshy} alt='logo' />

        </div>
        <div className='nav'>
            <img onClick={handleToggle} className='hambugger' src={hambugger} alt='logo' />

            <div className={`nav-list ${isActive ? 'is_active'  : 'is_notactive' }`} onClick={handleToggle}>
                <div className='links'>
                <Link  to=''> Home</Link>
                <Link to=''> Features</Link>
                <Link to=''> About us</Link>
                <Link to=''> Join Waitlist</Link>
                </div>
                <Link to=''  ><button className='get'>Get started</button>  </Link>
             </div>

        </div>
    </div>
  )
}

export default Navbar
