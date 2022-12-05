import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='Newsletter'>
       <div className="h1">Subscribe to <br />our Newsletter</div>
       <div className="email">
        <input type="text" name="" id=""  placeholder='Enter your email Address' />
        <button>Subscribe</button>
       </div>
    </div>
  )
}

export default Newsletter