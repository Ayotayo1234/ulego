import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Dropdown.css'
import ProductDropdown from './Productdropdown'
import Arrow from '../img/arrow.svg'


const Ourproductbtn = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
    <div className="Ourproductbtn">
        <Link onMouseEnter={()=> setDropdown(true)}onMouseLeave={()=> setDropdown(false)}>
            our product <img src={Arrow} alt="" />
             
             {dropdown &&<ProductDropdown />}
           </Link>
         
    </div>
    </>
  )
}

export default Ourproductbtn