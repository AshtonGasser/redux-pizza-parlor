import React from "react";
import "./App.css";
import MenuForm from "../MenuForm/MenuForm";
import {Route, HashRouter as Router, Link, useHistory,} from "react-router-dom";

import Customer from '../Customer/Customer.jsx'
import Checkout from '../Checkout/Checkout.jsx'
import TotalCost from '../TotalCost/TotalCost'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
          
        </header>

        <div className="nav-cost-div">
          <div className="nav-div">
        <nav className="nav">
         
              
          
              <Link to="/">Menu</Link>
           
              <Link to="/customer">Customer Info</Link>
              
              <Link to="/checkout">Checkout</Link>
          
         
        </nav>
         </div>

        <div className="cost-div"> <TotalCost/> </div>

        </div>
        {/* <img src='images/pizza_photo.png' /> */}
        
{/* using exact, so that each page doesn't have the menu */}
        <Route path="/" exact>  
          <MenuForm />
        </Route>

        <Route path="/customer">
          <Customer />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

      </div>
    </Router>
  );
}

export default App;


/// comment
