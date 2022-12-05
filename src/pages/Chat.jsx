import React from 'react'
import './chat.css'
import location from '../pages/img/location.svg'
import phone from '../pages/img/phone.svg'
import email from '../pages/img/email.svg'

const Chat = () => {
  return (
    <div className="chats">
      <div className="chat-h1">Chat with us</div>
      <div className="chat">
        <div className="chat-1">
            <div className="text">
            Would you like to get in touch with us for Help or any form of support? You can reach us 
            </div>
            <div className="location">
                <img src={location} alt="" />
                <div className="text-txt">
                    <h1>Our Location</h1>
                    <p>46, community Road , Akoka Road. <br /> Yaba, Lagos</p>
                </div>
            </div>
            <div className="phone">
            <img src={phone} alt="" />
                <div className="text-txt">
                    <h1>Phone  Number</h1>
                    <p>080-2222-555-666-77, 081- Ulego-Ng </p>
                </div>
            </div>
            <div className="email-form">
            <img src={email} alt="" />
                <div className="text-txt">
                    <h1>Email Address</h1>
                    <p>support@ulego.ng</p>
                </div>
            </div>
        </div>
        <div className="chat-2">
            <form action="">
            <div className="mail">
                <input type="text"  placeholder='Name'/>
                <input type="text"  placeholder='Email'/>
                <input type="text"  placeholder='Your Phone Number'/>
                <textarea name="Your Message"  id="" placeholder='Your Message'></textarea>
            </div>    
                <button>Send Message</button>
            
            </form>
            {/* <div className="mail">
                <input type="text"  placeholder='Name'/>
                <input type="text"  placeholder='Email'/>
                <input type="text"  placeholder='Your Phone Number'/>
                <textarea name="Your Message" cols="61" rows="10"  id="" placeholder='Your Message'></textarea>
                <button>Send Message</button>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Chat