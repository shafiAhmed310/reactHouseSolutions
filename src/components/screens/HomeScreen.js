import React from 'react';

import Carousel1 from '../Carousel/Carousel1';
import Carousel2 from '../Carousel/Carousel2';
import Carousel3 from '../Carousel/Carousel3';
import Footer from '../../components/screens/Footer';
import '../../App.css';
const HomeScreen = () => {
  
    return (
        <div className="container">
             
      <main>
      <section className="searchBlock">
        <article>
          <div className=" spaceBlock" >
           
          </div>
          <div className="formBlock">
          <form action="#">
   <input className="searchInput" type="search" placeholder="Search for plots flats floor plan...." />
   <button className="searchbtn" type="submit">Search</button>
  </form>

  </div>
            <div className=" spaceBlock1" >
           
            </div>
        </article>
        </section>
        
        <Carousel1></Carousel1>
        <Carousel2></Carousel2>
        <Carousel3></Carousel3>
        <Footer />
      
      </main>
        </div>
    );
};

export default HomeScreen;