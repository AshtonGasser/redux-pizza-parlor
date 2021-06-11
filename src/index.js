import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const menuReducer = (state=[], action) => {
    if (action.type === 'SET_MENU') { // axios GET
        return action.payload
    } else if ( action.type === 'GET_MENU') {
        return state
    }
    return state;
}



// tl- this needs to take in the ID, in payload, and filter out all items 
// not in the cart, return a new state array of things in the cart. this needs to be 
// referenced in the 
const cartReducer = (state = [], action) => {

    switch(action.type){ 
    case 'ADD_TO_CART':
    return [...state,action.payload]
    case 'REMOVE_FROM_CART':
        const matchItem = item => item.id !== action.payload.id
        return state.filter(matchItem)
    default:
    return state;
    }
}

const store = createStore(
combineReducers({
menuReducer,
cartReducer
}),
applyMiddleware(logger),
)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));


/// customer info reducer?