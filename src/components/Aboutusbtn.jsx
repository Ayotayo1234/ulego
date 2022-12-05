import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Dropdown.css'
import Aboutdropdown from './Aboutdropdown'
import Arrow from '../img/arrow.svg'

const Aboutusbtn = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <div className="Ourproductbtn">
        <Link onMouseEnter={()=> setDropdown(true)}onMouseLeave={()=> setDropdown(false)}>
            about us <img src={Arrow} alt="" />
            {dropdown &&<Aboutdropdown />}
         </Link>
    </div>
    </>
  )
}

export default Aboutusbtn