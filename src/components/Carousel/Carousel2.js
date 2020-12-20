import React, { Component } from 'react';
import 'isomorphic-fetch';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {FaRupeeSign} from  'react-icons/fa';
import './Carousel1.css';

class Carousel2 extends Component {
    render() {
        return (
            <div>

       <div className='container-fluid ' >            
       <h1 style={{padding:'0.5rem'}} >Latest Projects</h1>
       <p style={{marginLeft:'2rem'}}>Exclusive showcase of top projects</p>

        <OwlCarousel className="owl-theme"  items={3} loop  margin={12}responsive={{0:{
            items:1
        },
        600:{items:3},
        1000:{
            items:3
        }}}>
            <div  className="blog-content">
                <img className="img" src={'assets/images/plot2.jpg'} alt="plotImg" />
                <div className="blog-title">
                                <h3>Hiranandani</h3>
                                <p>by Hiranandani Pvt Ltd </p>
                                <span>40-60 plots</span>
                                <span> <FaRupeeSign/>35.71L-66.22L</span>
                               
                            </div>
                            </div>
                            <div  className="blog-content">
                                <img className="img" src={'assets/images/plot3.jpg'} alt="plotImg" />
                                <div className="blog-title">
                                <h3>Euva Ekka</h3>
                                <p>by Euva Pvt Ltd </p>
                                <span>40-60  plots</span>
                                <span> <FaRupeeSign/>61L-66.22L</span>
                               
                            </div>
                            </div>
            <div  className="blog-content">
                <img className="img" src={'assets/images/plot4.jpg'} alt="plotImg" />
                 <div className="blog-title">
                                <h3>Etha Su Casa Royal</h3>
                                <p>by Etha Realty Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> <FaRupeeSign/>35.71L-66.22L</span>
                               
                            </div>
                            </div>
           
            <div  className="blog-content">
                <img className="img" src={'assets/images/plot5.jpg'} alt="plotImg" />
                <div className="blog-title">
                                <h3>Etha Su Casa Royal</h3>
                                <p>by Etha Realty Pvt Ltd </p>
                                <span>2,3 BHK Apartments</span>
                                <span> <FaRupeeSign/>35.71L-66.22L</span>
                               
                            </div>
                            </div>
          

        </OwlCarousel>

      </div>  
            </div>
        );
    }
}

export default Carousel2;