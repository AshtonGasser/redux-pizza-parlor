import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "./MenuItem.css";

function MenuItem({ item }) {
  const dispatch = useDispatch();

  const [isAdd, setIsAdd] = useState(true); // controls conditional render flow

  function handleAdd() {
    console.log("adding pizza with id of:", item.id);
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    setIsAdd(false);
  }
  function handleRemove() {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    setIsAdd(true);
  }

  // renders a button to add or delete based on local state of isAdd boolean
    function addOrRemove() {
      if (isAdd) {
        return <button onClick={handleAdd}>Add</button>;
      } else if (!isAdd) {
        return <button onClick={handleRemove}>Remove</button>;
      }
    }

  return (
    <div className="menu-card">
      <div className="img-div">
        <img className="pizza-img" src={item.image_path} alt="" />
      </div>
      <div className="pizza-description">
        <p>{item.name}</p>
        <p>{item.description}</p>
      </div>
      <div className="card-button">
        {addOrRemove()}
      </div>
    </div>
  );
}

export default MenuItem;

// ### ORDER - SELECT PIZZA

// When visiting [http://localhost:3000/](http://localhost:3000/) display all of the pizzas on the screen.
// Allow users to add or remove each pizza they would like to order.
// **For base mode, only allow the user to have one of each pizza in their cart.
// ** Show the total cost of items in the cart in the top right of this page.

// This page should have a next button that brings the user to the **enter order details page**.

// ![Select Pizza View](wireframes/screen-one.png)
