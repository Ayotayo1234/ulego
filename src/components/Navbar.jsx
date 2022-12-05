import React, {useState} from 'react'
import Button from './Button'
import './Navbar.css'
import  {Link } from 'react-router-dom'
import Ourproductbtn from './Ourproductbtn'
import Aboutusbtn from './Aboutusbtn'
import Supportbtn from './Supportbtn'
import Logo from '../img/logo.svg'



const Navbar = () => {
  return (
    <>
    
      <nav className="navbar">
        <Link to='/' className='navbar-logo'>
          <img src={Logo} alt="" />
        </Link>
        <ul className='nav-items'>
            <Ourproductbtn />
            <Aboutusbtn />
            <Supportbtn/>
        </ul>
        <Button />
        
      </nav>
      
    </>
  )
}

export default Navbar