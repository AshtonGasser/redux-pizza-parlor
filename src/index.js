import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const menuReducer = (state=[], action) => {
    if (action.type === 'GET_MENU') {
        axios.get('/api/pizza')
        .then( response => {
            return[response.data]
        })
        .catch(error => {
            console.log('error getting menu', error);
            
        })     
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
menuReducer
cartReducer
}),
applyMiddleware(logger),
)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
