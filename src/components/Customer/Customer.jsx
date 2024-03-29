import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
function Customer() {
const  history = useHistory()
// states for inputs -- 
// inputs need value and on change event set -- see employeeForm from redux salary
// handle submit should call addInfo
// add employee sends dispatch

const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [city, setCity] = useState('')
const [zip, setZip] = useState('')

const dispatch = useDispatch();


const handleNext = () => {
 
  history.push('/checkout')
}

const addInfo = (info) => {
    console.log('dispatching', info);
    dispatch({
        type: 'ADD_INFO',
        payload: info
    })
    
      history.push('/checkout')
      
}

    function handleSubmit (event) {
        event.preventDefault();
        
        addInfo({
            name: name,
            address: address,
            city: city,
            zip: zip
        })
       
    }

  return (
    <div className="display">
      

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        ></input>
        <input type="text" placeholder="Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        ></input>
        <input type="text" placeholder="City"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        ></input>
        <input type="number" placeholder="Zip"
        value={zip}
        onChange={(event) => setZip(event.target.value)}
        ></input>
        <button type="submit" >Submit</button>
      </form>
      
    </div>
  );
}

export default Customer;

// inputs for customer info, we will need to 
// send this information to a customerReducer for storage upon form submit as an object from local state
// empty inputs
// navigate to /checkout






// ### ORDER - ENTER CUSTOMER INFORMATION

// Collect user information, *name*, *street address*, *city* and *zip*. 
// This page should have an option to select pickup vs. delivery. 
// The total cost of the order should appear in the top right of this page. 
// This page should have a next button that brings the user to the **checkout** page.

// ![Select Pizza View](wireframes/screen-two.png)

