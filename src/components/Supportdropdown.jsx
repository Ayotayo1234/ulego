import React, {useState} from 'react'
// import {  productDropdown } from './Navbaritems'
import {Link} from 'react-router-dom'
import './Dropdown.css'
import faq from '../img/faq.svg'
import chat from '../img/chat.svg'


const Supportdropdown = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <ul className={ dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={ () => setDropdown(!dropdown)}>
     <Link to='/faqs'> <li><img src={faq} alt="" />FAQ</li></Link>
     <Link><li><img src={chat} alt="" />Chat with us</li></Link>  
    </ul>
    </>
  )
}

export default Supportdropdown