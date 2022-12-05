import React from 'react'
import './team.css'
import ceo from '../pages/img/ceo.svg'
import cto from '../pages/img/cto.svg'
import cbo from '../pages/img/cbo.svg'
import coo from '../pages/img/coo.svg'
import facebook from '../pages/img/facebook.svg'
// import linkedin from '../pages/img/linkedin.svg'
import twitter from '../pages/img/twitter.svg'

const Team = () => {
  return (
    <div className='team'>
        <div className="team-h1">Our  Team</div>
        <div className="teams1">
            <div className="the-team">
                <img src={ceo} alt="" />
                <div className="team-info">
                    <div className="name">Nnamdi Ugwu</div>
                    <div className="post">CEO</div>
                    <div className="comment">Ulego is one of my <br /> biggest Projects and i will <br /> like you to buy into this <br /> idea</div>
                </div>
                <div className="media">
                    <div className="facebook"></div>
                    <div className="linkedin"></div>
                    <div className="twitter"></div>
                </div>
            </div>
            <div className="the-team">
                <img src={cto} alt="" />
                <div className="team-info">
                    <div className="name">Chibuike Ugwu</div>
                    <div className="post">CTO</div>
                    <div className="comment">Ulego is one of my <br /> biggest Projects and i will <br /> like you to buy into this <br /> idea</div>
                </div>
                <div className="media">
                    <div className="facebook"></div>
                    <div className="linkedin"></div>
                    <div className="twitter"></div>
                </div>
            </div>
            <div className="the-team">
                <img src={cbo} alt="" />
                <div className="team-info">
                    <div className="name">Ogunfunmilade Ibukun</div>
                    <div className="post">CBO</div>
                    <div className="comment">Ulego is one of my <br /> biggest Projects and i will <br /> like you to buy into this <br /> idea</div>
                </div>
                <div className="media">
                    <div className="facebook"></div>
                    <div className="linkedin"></div>
                    <div className="twitter"></div>
                </div>
            </div>
            <div className="the-team">
                <img src={coo} alt="" />
                <div className="team-info">
                    <div className="name">Olanrewaju Paul</div>
                    <div className="post">CBO</div>
                    <div className="comment">Ulego is one of my <br /> biggest Projects and i will <br /> like you to buy into this <br /> idea</div>
                </div>
                <div className="media">
                    <div className="facebook"></div>
                    <div className="linkedin"></div>
                    <div className="twitter"></div>
                </div>
            </div>
        </div>
        {/* <div className="one-team">
                <img src={coo} alt="" />
                <div className="one-info">
                    <div className="name">Nnamdi Ugwu</div>
                    <div className="post">COO</div>
                    <div className="comment">Ulego is one of my <br /> biggest Projects and i will <br /> like you to buy into this <br /> idea</div>
                </div>
                <div className="media">
                    <div className="facebook"></div>
                    <div className="linkedin"></div>
                    <div className="twitter"></div>
                </div>
            </div> */}
    </div>
  )
}

export default Team