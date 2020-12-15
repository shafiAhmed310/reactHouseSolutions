import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import './Carousel1.css';

class Carousel3 extends Component {
    render() {
        return (
            <div>

       <div className='container-fluid ' >            
       <h1 style={{padding:'0.5rem'}} >Featured Projects</h1>
       <p style={{marginLeft:'2rem'}}>Exclusive showcase of top projects</p>

        <OwlCarousel className="owl-theme"  items={3} loop  margin={12}>
            <div  className="blog-content">
                <img className="img" src={'assets/images/apartment1.webp'}  alt="apartmentImg"/>
                <div className="blog-title">
                                <h3>Etha Su Casa Royal</h3>
                                <p>by Etha Realty Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> <FontAwesomeIcon icon={faRupeeSign} />35.71L-66.22L</span>
                               
                            </div>
                            </div>
                            <div  className="blog-content">
                                <img className="img" src={'assets/images/apartment2.webp'}   alt="apartmentImg" />
                                <div className="blog-title">
                                <h3>Merlin The One</h3>
                                <p>by Merlin Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> <FontAwesomeIcon icon={faRupeeSign} />61L-66.22L</span>
                               
                            </div>
                            </div>
            <div  className="blog-content">
                <img className="img" src={'assets/images/apartment3.webp' }   alt="apartmentImg" />
                <div className="blog-title">
                                <h3>Suncrest Estate</h3>
                                <p>by suncrest Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> <FontAwesomeIcon icon={faRupeeSign} />35.71L-66.22L</span>
                               
                            </div>
                            </div>
           
            <div  className="blog-content">
                <img className="img" src={'assets/images/apartment4.webp'}   alt="apartmentImg" />
                <div className="blog-title">
                                <h3>Associated Erectors</h3>
                                <p>by Green Residency Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> <FontAwesomeIcon icon={faRupeeSign} />35.71L-66.22L</span>
                               
                            </div>
                            </div>
          

        </OwlCarousel>

      </div>  
            </div>
        );
    }
}

export default Carousel3;