import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsPinterest } from 'react-icons/bs';
import './Footer.css'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                   <h2>Travelify</h2>
                    <div className="social">
                        <BsInstagram className='icon' />
                        <BsFacebook className='icon' />
                        <BsTwitter className='icon' />
                        <BsPinterest className='icon'/>
                        <BsYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About Us</li>
                            <li>Partners</li>
                            <li>Advertise</li>
                            <li>Newsroom</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Pricing</li>
                            <li>Branches</li> 
                            <div className='to-top'><button><Link to='home'>Back to Top</Link></button></div>
                        </ul>
                         
                    </div>
                    
                </div>
                
            </div>
           
        </div>
    )
}

export default Footer
