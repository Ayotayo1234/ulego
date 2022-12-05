import React, {useState} from 'react'
// import {  productDropdown } from './Navbaritems'
import {Link} from 'react-router-dom'
import './Dropdown.css'
import team from '../img/team.svg'
import career from '../img/career.svg'
import blog from '../img/blog.svg'


const Aboutdropdown = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <ul className={ dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={ () => setDropdown(!dropdown)}>
    <Link to='/team'><li><img src={team} alt="" />Our Team</li></Link>
     <Link> <li><img src={career} alt="" /> Pay Utilities</li></Link>
     <Link><li><img src={blog} alt="" />Savings and Investment</li></Link>
    </ul>
    </>
  )
}

export default Aboutdropdown
