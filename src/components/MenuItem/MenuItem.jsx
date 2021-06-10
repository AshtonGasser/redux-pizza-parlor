import {useSelector} from 'react-redux'
import React from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'

function MenuItem (){
const dispatch = useDispatch ()
//const deleteItem =() => {
const menu =  useSelector(store => store.menuReducer)
//}
    return (

        <p> {JSON.stringify(menu)}</p>


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