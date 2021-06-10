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




const cartReducer = (state = [], action) => {

    switch(action.type){ 
    case 'ADD_TO_CART':
    return [...state,action.payload]
    //case 'REMOVE_FROM_CART':
    //const matchOrder = pizza => pizza.idNumber !== pizzaToDelete.idNumber; 
    //return state.filter(matchOrder)
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
