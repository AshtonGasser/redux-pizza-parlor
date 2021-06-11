import React from "react";
import axios from "axios";
import "./App.css";
import MenuItem from "../MenuItem/MenuItem";
import MenuForm from "../MenuForm/MenuForm";
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

import Customer from '../Customer/Customer.jsx'
import Checkout from '../Checkout/Checkout.jsx'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu-form">Menu</Link>
            </li>
            <li>
              <Link to="/customer">Customer Info</Link>
              <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            </li>
          </ul>
        </nav>

        {/* <img src='images/pizza_photo.png' /> */}
        <p>Pizza is great.</p>


        <Route path="/menu-form">
          <MenuForm />
        </Route>

        <Route path="/customer">
          <Customer />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        {/* 
  
  
  <Route path='/menu-form'>
  <MenuForm/>
  </Route>
  <Route path='/customer'>
  <Customer/>
  </Route>
  
  <Route path='/checkout'>
  <Checkout/>
  </Route>
  
  
  */}
      </div>
    </Router>
  );
}

export default App;