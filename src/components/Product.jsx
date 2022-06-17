import React,{ useEffect,useState } from 'react';
import "./Product.css";
import ReactImageMagnify from 'react-image-magnify';
import { db } from '../firebase';
import {  collection, getDoc,doc} from 'firebase/firestore';
import {useCart} from "react-use-cart"
import { NavLink} from "react-router-dom";




export const Product = (props) => {

   
  const {addItem} = useCart();

  const [product_data,setProduct_data] = useState(null);
  const [Ploading,setPloading] = useState(false);
  const productid = props.match.params.productid;
  const collection_name = props.match.params.collection_name;
  console.log(productid,collection_name)
  var data_new=null;
  
useEffect(() => {
  const get_product_data = async()=>{
   
    const docRef = doc(db,`collections/bWNuItQdPuXRTp0vNXNr/${collection_name}`,`${productid}`);
    const docSnap = await getDoc(docRef);
   
    
    const datata = await docSnap.data();
    datata.id= `${productid}`;
    console.log("data id",datata.id)
    console.log("Data",datata)
    data_new=datata;  
        
    setProduct_data(Object.assign({}, datata))
        
    setPloading(true);   
     
  }
  get_product_data();

},[])

   
const add_small=()=>{
  product_data.small= 1;
  product_data.medium=0;
  product_data.large=0;
  product_data.x_large = 0;
  
}
const add_medium=()=>{
  product_data.small= 0;
  product_data.medium=1;
  product_data.large=0;
  product_data.x_large = 0;
  
}
const add_large=()=>{
  product_data.small= 0;
  product_data.medium=0;
  product_data.large=1;
  product_data.x_large = 0;
  
}
const add_x_large=()=>{
  product_data.small= 0;
  product_data.medium=0;
  product_data.large=0;
  product_data.x_large = 1;
  
}
    const [isShown, setIsShown] = useState(false);
    function changeBackground(e) {
        e.target.style.background = 'red';
      }
  return (
    <>
    
    <div className='product_p'>

      <div>
      <div className='featured_product_form'>

<span id='title'>

  {Ploading ? product_data.collection : "loading"}
  

</span>
<br/>
<div id='Heading'>
{Ploading ? product_data.name : "loading"}
  <br/>
<span id='Price'>
RS {Ploading ? product_data.price : "loading"}
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
<div id='button_div' >
<button onClick={()=>add_small()}>
  SMALL
</button>
<button onClick={()=>add_medium()}>
  MEDIUM
</button>
<button onClick={()=>add_large()}>
  LARGE
</button>
<button onClick={()=>add_x_large()}>
  X-LARGE
</button>

</div>
<br/>

<div className='check_out_buttons'>
<button id='add' onClick={()=>addItem(product_data)}>
  Add To Cart
</button>
<br/>
<NavLink to="/checkout"><button id='check_out' onClick={()=>addItem(product_data)}>
  Check Out
</button></NavLink>
</div>
</div>
      </div>
      <div>
      
      <ReactImageMagnify {...{
    smallImage: {
        
        isFluidWidth: true,
        src: Ploading ? product_data.img_link : "loading",
    },
    largeImage: {
        src: Ploading ? product_data.img_link : "loading",
        width: 1200,
        height: 1800
    }
   
}} />
      
      

      </div>
      <div>
      <p>
      {Ploading ? product_data.description : "loading"}
      </p>
      </div>
    </div>
    
    </>
  )
}
export default Product
