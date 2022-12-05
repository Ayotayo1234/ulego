import React from 'react'
import Newsletter from './Newsletter'
import './footer.css'
import ulego from '../img/ulego.svg'
import btn1 from '../img/btn1.svg'
import btn2 from '../img/btn2.svg'
import facebook from '../img/facebook.svg'
import twiter from '../img/twiter.svg'
import instagram from '../img/instagram.svg'


const Footer = () => {
  return (
    <div >
        <Newsletter />
        <div className="footer">
          <div className="logo">
            <img src={ulego} alt="" />
          </div>
          <ul className="why">
            <li className='foot-heading'>Why  Ulego</li>
            <li>Send And Recieve Money</li>
            <li>Save And Invest</li>
            <li>Pay Utilities And Bills</li>
          </ul>
          <ul className="company">
            <li className='foot-heading'>Company</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Join Our Team</li>
            <li>About Us</li>
          </ul>
          <ul className="support">
            <li className='foot-heading'>Support</li>
            <li>Get Help</li>
            <li>FAQ’S</li>
            <li>Security</li>
            <li>Contact Us</li>
          </ul>
          <ul className="transparency">
            <li className='foot-heading'>Transparency</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Information Security Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="btn-social">
         <div className="buttons">
          <button className='btn1'>
            <img src={btn1} alt="" />
            <div className="btn-txt">
            <div className="p">GET IT ON</div>
            <div className="snd-p">App Store</div>
            </div>
          </button>
          <button className='btn1'>
            <img src={btn2} alt="" />
            <div className="btn-txt">
            <div className="p">GET IT ON</div>
            <div className="snd-p">Google Play</div>
            </div>
          </button>
         </div>
         <div className="follow">
          <p>Follow Us:</p>
          <div className="img">
            <img src={facebook} alt="" />
            <img src={twiter} alt="" />
            <img src={instagram} alt="" />
          </div>
         </div>
        </div>
    </div>
  )
}

export default Footer