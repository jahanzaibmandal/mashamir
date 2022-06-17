import React from 'react'
import "./Collections.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { db } from '../firebase';
import {  collection, getDocs} from 'firebase/firestore';
import { useEffect,useState } from 'react';
import { NavLink} from "react-router-dom";




export const Collections = () => {

  const first_slider_data = collection(db,"first_product_slider")
  const [first_slider, setFirst_slider] = useState([]);
  const [productloading,setlProductoading] = useState(false);
  useEffect(()=>{

    const get_first_slider = async() =>{
      const data = await getDocs(first_slider_data)
    setFirst_slider(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    setlProductoading(true);
    }
    get_first_slider();

},[])


  const options = {
    
    
    dots:true,
    loop: false,
    margin:30,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1080: {
            items: 4,
        },
    },
    
};

  return (
    <>
    <div className='heading_div'>
      <span id='headin_name'>New Arivals</span>
      <img src='./images/b3.jpg' id='heading_image'/>
    </div>



 {productloading? <OwlCarousel 
 className="custom_owl"
{...options}
 
 >
{first_slider.map((slide)=>{
  return(
    <div className='items'>
      <span>collections name</span>
      <NavLink to="/" ><img
     src={slide.img_link}
     
     
    />
    
    
    </NavLink>
    
   
    
    </div>
   )})}

</OwlCarousel>:"Loading Collections"} 
    


  <div className='items_div'>
  {first_slider.map((slide)=>{
  return(
    <div className='product_item'>
    <img
     src={slide.img_link}
     
     
    />
    <button className='add_button'>+</button>
    <div className='product_details'>
      <span>
        Hasil  -15ya
      </span>
      <br/>
      <span>Rs8000</span>

      
    </div>
    </div>
   )})}
  </div>


    </>
  )
}
export default Collections