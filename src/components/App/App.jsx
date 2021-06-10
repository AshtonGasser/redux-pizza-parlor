import React from 'react';
import axios from 'axios';
import './App.css';

import { Route, HashRouter as Router, Link, useHistory } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  

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
