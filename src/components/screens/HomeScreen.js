import React from 'react';

import Carousel1 from '../Carousel/Carousel1';
import Carousel2 from '../Carousel/Carousel2';
import Carousel3 from '../Carousel/Carousel3';
import Scroll from '../../components/Scroll';
import {FaFacebookSquare , FaInstagramSquare , FaTwitterSquare , FaYoutubeSquare , FaCopyright } from 'react-icons/fa'
import '../../App.css';
const HomeScreen = () => {
  
    return (
        <div className="container">
             
      <main>
      <section id="searchBlock">
        <article>
            <div>
  <form action="#">
   <input className="searchInput" type="search" placeholder="Search for plots flats floor plan...." />
   <button className="searchbtn" type="submit">Search</button>
  </form>
            </div>
        </article>
        </section>
        
        <Carousel1></Carousel1>
        <Carousel2></Carousel2>
        <Carousel3></Carousel3>
        
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
      </main>
        </div>
    );
};

export default HomeScreen;