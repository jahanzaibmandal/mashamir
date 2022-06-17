import React from 'react'
import { Carousel } from 'react-bootstrap';
import {motion} from 'framer-motion';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { db } from '../firebase';
import {  collection, getDocs} from 'firebase/firestore';
import { useEffect,useState } from 'react';
import "./Home.css";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {BsFillSuitHeartFill} from "react-icons/bs";
import { NavLink} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import {useCart} from "react-use-cart"



const  Home = () => {


   const main_baners = collection(db , "main")
   const Headings = collection(db , "headings")
   const first_slider_data = collection(db,"collections/bWNuItQdPuXRTp0vNXNr/my_products")
   const second_slider_data = collection(db,"collections/bWNuItQdPuXRTp0vNXNr/product")
   const [main_bainerss , setMain_bainerss ] = useState([]);
   const [headings , setHeadings ] = useState([]);
   const [first_slider, setFirst_slider] = useState([]);
   const [second_slider, setSecond_slider] = useState([]);
   const [loading,setLoading] = useState(false);
   const [sloading,setSloading] = useState(false);
   const {addItem} = useCart();



 // main bainer Data ......

   useEffect(() => {
    const get_main_bainer = async()=>{
      const  data = await getDocs(main_baners)
      setMain_bainerss(data.docs.map((doc)=>({...doc.data() , id: doc.id})))
      console.log(data);
      

    }
    get_main_bainer();
  },[])
 
  // headings data.......

  useEffect(() => {
    const get_headings = async()=>{
      const  data = await getDocs(Headings)
      setHeadings(data.docs.map((doc)=>({...doc.data() , id: doc.id})))
     
    }
    get_headings();
  },[])
 
  // first slider data....

  

  useEffect(()=>{

       const get_first_slider = async() =>{
         const data = await getDocs(first_slider_data)
       setFirst_slider(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
       console.log(first_slider.id)
       setLoading(true)
       }
       get_first_slider();

  },[])


// second slider data....

  

useEffect(()=>{

  const get_second_slider = async() =>{
    const data = await getDocs(second_slider_data)
  setSecond_slider(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
  
  setSloading(true)
  }
  get_second_slider();

},[])


  const options = {
    
    
    dots:true,
    loop: true,
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
    
   
<div className='main_slider'>
<Carousel fade st className='main_slider_res'>
 {main_bainerss.map((bainer)=>{
   
   return <Carousel.Item id='slider_img'>
   <img
     className="d-block w-100"
     src={bainer.img_link}
     alt="First slide"
   />
   <Carousel.Caption>
     <h1 className='heading'>{bainer.heading}</h1>
     <p className='descript'> {bainer.description}</p>
   </Carousel.Caption>
 </Carousel.Item>
 })}


  
</Carousel>



<div className='product_slider'>
{headings.map(headinG=>{

  return(

<motion.h1 animate={{y:50}} id='heading'>
{headinG.first_slider_heading}
    </motion.h1>
  )
})}






</div>
{loading ? <OwlCarousel className="custom_owl" {...options}>


{first_slider.map((slide)=>{
  console.log(slide.id)
  
  return(
    <div className='item'>
   <NavLink to={`${Route.product="product"}/${slide.collection}/${slide.id}`}>
    <img
     src={slide.img_link}
     
     
    /></NavLink>
     <NavLink to={`${Route.product="product"}/${slide.collection}/${slide.id}`}>
      <button className='add_button'>+</button>
      </NavLink>
    <div className='product_details'>
    <span>
        {slide.name}
      </span>
      <br/>
      <span>RS {slide.price}</span>

      
    </div>
    </div>
   )})}

</OwlCarousel> : "loading"}



<div className='view_collection_link'>
<ul><li><a href="#">View Collections</a></li></ul>
</div>

<div className='top_collection_div '>
  <Row id='roww'>

    <Col xs={{span: 10, offset:2}} sm={{span: 6, offset:3}} md={{ span: 4, offset:1}} lg={{ span: 4, offset:1}} xl={{ span: 3, offset:3}}>
    <img
 src='./images/test.jpg'


/>
    </Col>

    <Col xs={{span: 10, offset:1}} sm={{span: 7, offset:1}} md={{ span: 4, offset:1}} lg={{ span:4, offset:0}} xl={{ span: 3, offset:0}}>
    <div className='top_collection_div_data'>
 <span id='collection_naem'>
   New collection
 </span>
 <br/>
 <span id='collection_heading'>
 Cosy and comfortable
 </span>
 <br/>
 <p id='collection_description'>
 The collection features a warm muted washy colour
  palette with dusty peach, khaki, chocolate and
   lavender highlights made in luxe fabrications 
   including linen, silk, cotton and Mongolian lambs
    wool.
 </p>
 <div className='view_collection_link'>
<ul><li><a href='#' >SHOP COLLECTION</a></li></ul>
</div>
</div>

    </Col>

  </Row>





</div>




<div className='product_slider'>
{headings.map(headinG=>{

  return(

<motion.h1 animate={{y:50}} id='heading'>
{headinG.first_slider_heading}
    </motion.h1>
  )
})}






</div>
{sloading ? <OwlCarousel 
 className="custom_owl"
{...options}
 
 >
{second_slider.map((slide)=>{
  
  return(
    <div className='item'>
      
      <NavLink to={`${Route.product="product"}/${slide.collection}/${slide.id}`}>
    <img
     src={slide.img_link}
     
     
    /></NavLink>
     <button className='add_button'>+</button>
    <div className='product_details'>
      <span>
        {slide.name}
      </span>
      <br/>
      <span>RS {slide.price}</span>

      
    </div>
    </div>
   )})}

</OwlCarousel> : "loading"}



<div className='view_collection_link'>
<ul><li><a href="#">View Collections</a></li></ul>
</div>



<div className='collections_container'>


<div id='Row'>
    <Col id='col'>
      <div className='collections_container_card'>
        <button>
      <span>MSashamir New</span>
      <img
    src='./images/test.jpg'
    />
    </button>
      </div>
   
    </Col>
    <Col id='col'>
    
    <div className='collections_container_card'>
    <button>
      <span>MSashamir New</span>
      <img
    src='./images/test2.png'
    />
     </button>
      
      </div>
      </Col>
    <Col id='col'>
    
    <div className='collections_container_card'>
    <button>
      <span>MSashamir New</span>
      <img
    src='./images/test3.jpg'
    />
     </button>
      
      </div>
    </Col>
  </div>


</div>



<div className='featured_product_div'>


<Row id='Row'>
    <Col md={{ span: 5, offset:0}} lg={{ span: 5, offset:1}} xl={{ span: 5, offset:1}}>
      
      
      <img
    src='./images/test.jpg'
    />
   
    </Col>
    <Col md={{ span: 5, offset: 0}} lg={{span: 5, offset: 0}} xl={{ span: 5, offset:1}}>
    
    <div className='featured_product_form'>

      <span id='title'>
      <BsFillSuitHeartFill/>  FEATURED
      </span>
   <br/>
      <div id='Heading'>
        HAZEL-11 Dress
        <br/>
      <span id='Price'>
        Rs 5000
      </span>
      </div>
     
      <br/>
      <div id='buttons_heading'>

      
      <span id='size'>
        Size
      </span>
      <span id='size_chart'>
        Size Chart
      </span>

      </div>
      <div id='button_div'>
      <button>
        SMALL
      </button>
      <button>
        MEDIUM
      </button>
      <button>
        LARGE
      </button>
      <button>
        X-LARGE
      </button>

      </div>
    <br/>

    <div className='check_out_buttons'>
      <button id='add'>
        Add To Cart
      </button>
     <br/>
      <button id='check_out'>
        Check Out
      </button>
    </div>
    </div>
      
     
      </Col>
    
  </Row>


</div>




</div>

  )
}

export default Home