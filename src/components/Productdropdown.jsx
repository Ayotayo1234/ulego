import React, {useState} from 'react'
// import {  productDropdown } from './Navbaritems'
import {Link} from 'react-router-dom'
import './Dropdown.css'
import Send from '../img/send.svg'
import Airtime from '../img/airtime.svg'
import Utilities from '../img/utilities.svg'
import Savings from '../img/savings.svg'

const ProductDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <ul className={ dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={ () => setDropdown(!dropdown)}>
     <Link> <li> <img src={Send} alt="" /> Send and Receive Payment</li></Link>
     <Link><li><img src={Airtime} alt="" /> Buy Airtime</li></Link>
     <Link> <li><img src={Utilities} alt="" /> Pay Utilities</li></Link>
     <Link><li><img src={Savings} alt="" />Savings and Investment</li></Link>
    </ul>
    </>
  )
}

export default ProductDropdown