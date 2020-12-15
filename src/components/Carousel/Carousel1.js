import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';

import './Carousel1.css';

class Carousel1 extends Component {
    render() {
        return (
            <div>

       <div className='container-fluid ' >            
       <h1 style={{padding:'1.5rem'}} >Featured Collections</h1>

        <OwlCarousel className="owl-theme"  items={3} loop  margin={12}  autoplay={true}>
            <div className="blog-content">
                <img className="img" src={'assets/images/plot1.jpg'}  alt="plotImg" />
            <div className="blog-title">
                                <h3>Aratt Group</h3>
                                <p>by Aratt Pvt Ltd </p>
                                <span>40-60ft Plots</span>
                                <span> < FontAwesomeIcon icon={faRupeeSign} />35.71L-66.22L</span>
                               
                            </div>
                            </div>
                            <div className="blog-content">
                                <img className="img" src={'assets/images/rent1.jpg'} alt="rent" />
                             <div className="blog-title">
                                <h3>Prestige Group</h3>
                                <p>by Prestige Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> < FontAwesomeIcon icon={faRupeeSign} />15000-18000</span>
                               
                            </div>
                            </div>
            <div className="blog-content">
                <img className="img" src={'assets/images/flat1.jpg'} alt="flat" />
                 <div className="blog-title">
                                <h3>Etha Su Casa Royal</h3>
                                <p>by Etha Realty Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> < FontAwesomeIcon icon={faRupeeSign} />35.71L-66.22L</span>
                               
                            </div>
                            </div>
           
            <div className="blog-content">
                <img className="img" src={'assets/images/construction.jpg'} alt="construction" />
                  <div className="blog-title">
                                <h3>Etha Su Casa Royal</h3>
                                <p>by Etha Realty Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> < FontAwesomeIcon icon={faRupeeSign} />35.71L-66.22L</span>
                               
                            </div>
                            </div>
            <div className="blog-content">
                <img className="img" src={'assets/images/floorplan1.jpg'} alt="floorplan" />
                  <div className="blog-title">
                                <h3>Floor Plan </h3>
                                <p>Design Your Dream House </p>
                                <span>By The Best Architecture</span>
                                <span> < FontAwesomeIcon icon={faRupeeSign} />35.71L-66.22L</span>
                               
                            </div>
                            </div>
          

        </OwlCarousel>

      </div>  
            </div>
        );
    }
}

export default Carousel1;