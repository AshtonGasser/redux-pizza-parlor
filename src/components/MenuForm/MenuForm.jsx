import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";
import axios from "axios";

import "./MenuForm.css";

function MenuForm() {
  const dispatch = useDispatch();
  const menu = useSelector((store) => store.menuReducer);
  // const [isAdd, setIsAdd] = useState(true)

  // get menu data from server on load
  useEffect(() => {
    console.log("in useEffect");
    setMenu();
  }, []);

  //sends a dispatch to the menu reducer to set it to the present "pizza" table via an axios.GET
  const setMenu = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        dispatch({
          type: "SET_MENU",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error getting menu", error);
      });
  };

// maps over the menu and returns a menu item per each
  return (
    <div className="display">
      {menu.map((item) => (
        <MenuItem key={item.id}
        item={item} />
      ))}
    </div>
  );
}

export default MenuForm;
