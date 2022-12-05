import React from 'react'
import './home.css'
import Navbar from '../components/Navbar'
import playstore from '../pages/img/playstore.svg'

const Home = () => {
  return ( 
   <div className="home">
  <div className="home-section-1">
    <div className="home-section-1a">
      <div className="house-of-finance"></div>
      {/* <h1>We are the home <br /> of finance</h1>
      <p>Start your financial journey with ease.
Send money, make payment, pay bills fast and easy!</p> */}
<div className="btns">
  <button>Get on IOS</button>
  <button><img src={playstore} alt="" /> Get on Android</button>
</div>
    </div>
    <div className="home-section-1b">
      {/* <div className="green">
        <div className="green-img">
          
        </div>
      </div> */}
    </div>
  </div>
    </div>
  )
}

export default Home