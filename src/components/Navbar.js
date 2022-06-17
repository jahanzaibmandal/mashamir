import React,{ useEffect,useState } from 'react';
import "./Navbar.css";
import {BsCart,BsSearch} from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { NavLink} from "react-router-dom";
import {motion} from 'framer-motion';
import { useCart } from 'react-use-cart';
const Navbar = () => {


const {
  totalUniqueItems,
  totalItems,
}= useCart();
const [show,setShow] = useState(false);
const [cshow,setCShow] = useState(false);

  return (
    <nav className="main-nav">
      
     {
       show?<div className='nav_mobile_div' onClick={()=>setShow(false)}>
         <motion.div id='menu_div'  animate={{ x: [0, 100, 0] }}>  
                 <ul>
                 <li></li>
                 <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/collections">Collections</NavLink></li>
                  <li><NavLink to="/aboutus">About Us</NavLink></li>
                  <li><NavLink to="/contactus">Contact Us</NavLink></li>
                   
             </ul>
       </motion.div> </div>:null
       
     }
     <div className="lef-men">
       
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/collections">Collections</NavLink></li>
        <li><NavLink to="/aboutus">AboutUs</NavLink></li>
        <li><NavLink to="/contactus">Contact Us</NavLink></li>

        </ul>

     </div>
     <div className="logo">
         <a href="#">
       <img src="./images/logo.png" alt="Masha Mir" />
       </a>
     </div>
     
     <div className="icons">
     <ul>
            <li ><NavLink to="/checkout">
              <div>
              ({totalUniqueItems})
              </div>
              <BsCart/> 
              </NavLink></li>
            
             </ul>
     </div>
     <div className='menu_icon'><button onClick={()=>setShow(true)}><FiMenu/></button></div>

     
  
     
    </nav>
  )
}

export default Navbar