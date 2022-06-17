import { useState } from 'react'; 
import { useCart } from 'react-use-cart';
import "./Check_out.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../firebase';
import {  collection, getDoc,doc,addDoc,updateDoc,setDoc} from 'firebase/firestore';
import { useEffect } from 'react';

export const Check_out = () => {
  
  
   const [checkvalue,setCheckvalue] = useState({
    firstname:"",
    last_name:"",
    phone_number:"",
    email:"",
    address1:"",
    address2:"",
    country:"",
    state:"",
    zip:"",
   });
   const handleinput =(e)=>{
       const name = e.target.name;
       const value = e.target.value;
       setCheckvalue({...checkvalue,[name]:value})

   }



  const [cloading,setCloading] = useState(false);
  const {
    isEmpty,
    totalItems,
    cartTotal,
    items,
    removeItem,
    emptyCart,
    updateItemQuantity,
  }= useCart();

  
  const confirm=()=>{
   
    items.map((prod)=>{
      const product_quantatiy_update = doc(db, `collections/bWNuItQdPuXRTp0vNXNr/${prod.collection}`, `${prod.id}`);
      
      console.log(product_quantatiy_update)
      const update_product = async()=>{
          
        
        const Snap = await getDoc(product_quantatiy_update);    
        const product_information = await Snap.data();
        
        console.log(product_information.medium)
        await updateDoc(product_quantatiy_update, {
          small: product_information.samll-prod.samll,
          medium:product_information.medium-prod.medium,
          large: product_information.large-prod.large,
          x_large: product_information.x_large-prod.x_large,

        })
        console.log(checkvalue.address1)
      }
     
      
     
 
      update_product();
      
      
    })
    const add_order =async()=>{
      const newCityRef = doc(collection(db, "order"));
    
      await setDoc(newCityRef, checkvalue);
     }
     add_order();
    
     checkvalue.firstname=""  
     checkvalue.last_name=""
     checkvalue.phone_number=""
     checkvalue.email=""
     checkvalue.address1=""
     checkvalue.address2=""
     checkvalue.country=""
     checkvalue.state=""
     checkvalue.zip="" 
     emptyCart()
  }


  return (
    <>
<div className="maincontainer">
       
        <div class="container">
          <div class="py-5 text-center">
            
            <h2>Checkout</h2>
          
          </div>
          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart total items ({totalItems})</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                
                {
                  items.map((prod)=>{
                    if (isEmpty) return (<li className="list-group-item d-flex justify-content-between lh-condensed"><p>Your cart is empty</p></li>);
                    return(
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">{prod.name}</h6>
                    <small className="text-muted">{prod.collection}</small>
                    
                  </div>

                  <div>
                    <button className='cart-button' onClick={()=>updateItemQuantity(prod.id,prod.quantity-1)}> {"-"} </button>
                    <button className='cart-button' onClick={()=>removeItem(prod.id)}> Remove </button>
                    <button className='cart-button' onClick={()=>updateItemQuantity(prod.id,prod.quantity+1)}> {"+"} </button>
                  </div>
                  <span class="text-muted">RS {prod.price*prod.quantity}</span>
                  
                </li>)
                  })
                }
                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Epty Cart</h6>
                    
                  </div>
                  <span class="text-success">0</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (RS)</span>
                  <strong>{cartTotal}</strong>
                </li>
              </ul>
              <form class="card p-2">
                <div class="input-group">
                  <input name="" type="text" class="form-control" placeholder="Promo code"/>
                  <div class="input-group-append">
                    <button name="" type="button" class="btn btn-secondary" onClick={()=>emptyCart()}>Redeem</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Billing address</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input name="firstname" type="text" class="form-control" id="firstName"  placeholder="" value={checkvalue.firstname} onChange={handleinput} required />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input name="last_name" type="text" class="form-control" id="lastName" placeholder="" value={checkvalue.last_name} onChange={handleinput} required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="username">Phone Number</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">+92</span>
                    </div>
                    <input name="phone_number" type="text" class="form-control" id="username" placeholder="Phone Number" value={checkvalue.phone_number}  onChange={handleinput} required />
                    
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input name="email" type="email" class="form-control" id="email" placeholder="you@example.com" value={checkvalue.email} onChange={handleinput} />
               <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address">Address</label>
                  <input name="address1" type="text" class="form-control" id="address" placeholder="1234 Main St" value={checkvalue.address1} onChange={handleinput} required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                  <input name="address2" type="text" class="form-control" id="address2" placeholder="Apartment or suite" value={checkvalue.address2} onChange={handleinput} />
                </div>
                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select name='country' class="custom-select d-block w-100" id="country" value={checkvalue.country}  onChange={handleinput} required>
                      <option value={checkvalue}>Choose...</option>
                      <option>Pakistan</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select name='state' class="custom-select d-block w-100" id="state" value={checkvalue.state} onChange={handleinput}  required>
                      <option value={checkvalue}>Choose...</option>
                      <option>Punjab</option>
                      <option>KPK</option>
                      <option>Sindh</option>
                      <option>Balochistan</option>
                      <option>GB</option>
                      <option>Kashmir</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input name="zip" type="text" class="form-control" id="zip" placeholder="" value={checkvalue.zip} onChange={handleinput}  required />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
            
                <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod"  type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="credit">COD</label>
                  </div>
                </div>
                
                
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" name="" type="button" onClick={()=>confirm()} >Continue to checkout</button>
              </form>
            </div>
          </div>
          
        </div>
     
      </div>
    </>
  )
}

export default Check_out