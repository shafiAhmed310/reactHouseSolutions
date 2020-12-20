import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Jumbotron , Button} from 'react-bootstrap'
import  {FaRupeeSign } from 'react-icons/fa';
import Footer from '../screens/Footer';
import './Plots.css' ;

class PlotRoute extends Component {
    render() {
        return (
            <div className="container">
               <Jumbotron>
                 <div className="gridBlock">
                     <div>
                         <img alt="plots" src={'assets/images/plot6.jpg'} />
                     </div>
                     <div>
                         <b> <FaRupeeSign />45 LAC</b>
                        <p> <FaRupeeSign />5422 per sqft</p>
                     </div>
                     <div>
                       <p> <b>2 BHK Apartment</b> for Sale in Kengeri</p>
                         <p className="details">Society: Sai Gangothri Hill Crest</p>
                        <p  className="details"> Hill Crest is a luxurious and affordable residential apartment project by Sairam Dwellings located next to Vishweshwaraiah Layout 2nd Stage Bangalore OFF NICE ROAD, which is also close proximity to Kengeri Metro Station, Educational institution like Edify School, Chitrakoota School, Hill Rock School, RV Engineering College.</p>
                     <Button variant="danger">Contact Builder</Button>
                     <Button className="primary">Enquire Now</Button>
                     </div>
                 </div>
               </Jumbotron>
               <Jumbotron>
                 <div className="gridBlock">
                     <div>
                         <img alt="plots" src={'assets/images/plot7.jpg'} />
                     </div>
                     <div>
                         <b> <FaRupeeSign />45 LAC</b>
                        <p> <FaRupeeSign />5422 per sqft</p>
                     </div>
                     <div>
                       <p> <b>2 BHK Apartment</b> for Sale in Kengeri</p>
                         <p className="details">Society: Sai Gangothri Hill Crest</p>
                        <p  className="details"> Hill Crest is a luxurious and affordable residential apartment project by Sairam Dwellings located next to Vishweshwaraiah Layout 2nd Stage Bangalore OFF NICE ROAD, which is also close proximity to Kengeri Metro Station, Educational institution like Edify School, Chitrakoota School, Hill Rock School, RV Engineering College.</p>
                     <Button variant="danger">Contact Builder</Button>
                     <Button className="primary">Enquire Now</Button>
                     </div>
                 </div>
               </Jumbotron>
               <Jumbotron>
                 <div className="gridBlock">
                     <div>
                         <img alt="plots" src={'assets/images/plot8.jpg'} />
                     </div>
                     <div>
                         <b> <FaRupeeSign />45 LAC</b>
                        <p> <FaRupeeSign />5422 per sqft</p>
                     </div>
                     <div>
                       <p> <b>2 BHK Apartment</b> for Sale in Kengeri</p>
                         <p className="details">Society: Sai Gangothri Hill Crest</p>
                        <p  className="details"> Hill Crest is a luxurious and affordable residential apartment project by Sairam Dwellings located next to Vishweshwaraiah Layout 2nd Stage Bangalore OFF NICE ROAD, which is also close proximity to Kengeri Metro Station, Educational institution like Edify School, Chitrakoota School, Hill Rock School, RV Engineering College.</p>
                     <Button variant="danger">Contact Builder</Button>
                     <Button className="primary">Enquire Now</Button>
                     </div>
                 </div>
               </Jumbotron>
               <Jumbotron  className="footerRoutes">
                 <div className="gridBlock">
                     <div>
                         <img alt="plots" src={'assets/images/plot9.jpg'} />
                     </div>
                     <div>
                         <b> <FaRupeeSign />45 LAC</b>
                        <p> <FaRupeeSign />5422 per sqft</p>
                     </div>
                     <div>
                       <p> <b>2 BHK Apartment</b> for Sale in Kengeri</p>
                         <p className="details">Society: Sai Gangothri Hill Crest</p>
                        <p  className="details"> Hill Crest is a luxurious and affordable residential apartment project by Sairam Dwellings located next to Vishweshwaraiah Layout 2nd Stage Bangalore OFF NICE ROAD, which is also close proximity to Kengeri Metro Station, Educational institution like Edify School, Chitrakoota School, Hill Rock School, RV Engineering College.</p>
                     <Button variant="danger">Contact Builder</Button>
                     <Button className="primary">Enquire Now</Button>
                     </div>
                 </div>
               </Jumbotron>
               <Footer />
            </div>
        );
    }
}

export default withRouter(PlotRoute) ;