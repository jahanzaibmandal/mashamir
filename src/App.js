
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Collections from './components/Collections';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Product from './components/Product';
import { Footer } from './components/Footer';
import Check_out from './components/Check_out';
import {Route, Switch} from "react-router-dom";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <div>
      <CartProvider>
     <Navbar/>
     <br/>
     <br/>
     <br/>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/collections' component={Collections}/>
       <Route exact path='/aboutus' component={AboutUs}/>
       <Route exact path='/contactus' component={ContactUs}/>
       <Route exact path='/product/:collection_name/:productid' component={Product}/>
       <Route exact path='/checkout' component={Check_out}/>
     </Switch>
     <Footer/>
     </CartProvider>
    </div>
  );
}

export default App;
