import React, { Component } from 'react';
import Scroll from '../Scroll';
import '../Scroll.css';
import '../../App.css';
import {FaFacebookSquare , FaInstagramSquare , FaTwitterSquare , FaYoutubeSquare , FaCopyright } from 'react-icons/fa'

class Footer extends Component {
    render() {
        return (
            <div>
                  <footer className="footer container">
            <div className="container">
                <div className="about-us">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus cupiditate officiis qui maxime est neque excepturi eveniet minus molestiae.ss</p>
                </div>
                <div  id="contact"className="newsletter">
                    <h2>Contact Us</h2>
    
                    <div className="form-element">
                       <span>www.housolution.in</span>
                       <span>+91 9313889220</span>
                       <span>Contact@housolution.in</span>
                    </div>
                </div>
                
                <div className="follow">
                    <h2>Follow Us</h2>
                    <p>Let us be Social</p>
                   <div>
                  <FaFacebookSquare  className="i"/>
                  <FaInstagramSquare className="i" />
                  <FaTwitterSquare className="i" />
                  <FaYoutubeSquare className="i" />
                  
                   </div>
                    
                </div>
            </div>
            <div className="rights flex-row">
                <h4 className="text-gray">Copyright <FaCopyright/>  All rights are reserved </h4>
            </div>
            <div className="move-up">
                <span> <Scroll />  </span>
            </div>
        
       
    </footer>
            </div>
        );
    }
}

export default Footer;