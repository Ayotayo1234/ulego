import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Dropdown.css'
import Supportdropdown from './Supportdropdown'
import Arrow from '../img/arrow.svg'


const Supportbtn = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <div className="Ourproductbtn">
        <Link onMouseEnter={()=> setDropdown(true)}onMouseLeave={()=> setDropdown(false)}>
           <p>support </p><img src={Arrow} alt="" />
            {dropdown && <Supportdropdown />}
         </Link>
    </div>
    </>
  )
}

export default Supportbtn