
import React, { useEffect, useState } from 'react';
import {FaArrowAltCircleUp} from 'react-icons/fa';
import {useWindowScroll} from 'react-use';
import './Scroll.css'
const Scroll = () => {
    const {y : pageYOffset} = useWindowScroll();
    const [visible , setVisiblity] = useState(false);
   useEffect(()=>{
 if(pageYOffset >400){
     setVisiblity(true)
 }
 else{
     setVisiblity(false)
 }
   },[pageYOffset]);
   const scrollToTop = ()=> window.scrollTo({top:0 , behavior:"smooth"});
    if(!visible){
        return false
    }
    return (
        <div>
            <div className="scroll cursor-pointer" onClick={scrollToTop}>
                <FaArrowAltCircleUp className="icon"  />
            </div>
        </div>
    );
};

export default Scroll;