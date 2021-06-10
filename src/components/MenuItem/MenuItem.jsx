import {useSelector} from 'react-redux'
import React from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'

function MenuItem (props){
const dispatch = useDispatch ()
//const deleteItem =() => {
const menu =  useSelector(store => store.menuReducer)

function handleAdd () {
    dispatch({
        type: 'ADD_TO_CART',
        payload: 'replace with ID'  /// <--------
      })
}
function handleRemove () {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: 'replace with ID'  /// <--------
      })
}

function addOrRemove () {
    let isAdd = true;
    if (isAdd) {
        isAdd = !isAdd
        return <button onClick={handleAdd}>Add</button>
    } else if (!isAdd) {
        isAdd = !isAdd
        return <button onClick={handleRemove}>Remove</button>
    }
}

    return (

        <div className="menu-card" >
            <div className="pizza-img">
               
            </div>
            <div className="pizza-description">

            </div>
            <div className="card-button">
                
            </div>


        </div>



)

}



export default MenuItem


// ### ORDER - SELECT PIZZA

// When visiting [http://localhost:3000/](http://localhost:3000/) display all of the pizzas on the screen. 
// Allow users to add or remove each pizza they would like to order. 
// **For base mode, only allow the user to have one of each pizza in their cart.
// ** Show the total cost of items in the cart in the top right of this page. 

// This page should have a next button that brings the user to the **enter order details page**.

// ![Select Pizza View](wireframes/screen-one.png)


