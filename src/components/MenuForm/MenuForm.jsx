import { useEffect,useState } from "react"
import { useSelector,  useDispatch } from "react-redux"
import MenuItem from '../MenuItem/MenuItem'
import axios from 'axios'

import './MenuForm.css'


function MenuForm () {
    const dispatch = useDispatch()
    const menu = useSelector(store => store.menuReducer)
    const [isAdd, setIsAdd] = useState(true)

    
      // get menu data from server on load
  useEffect(() => {
    console.log('in useEffect');
    setMenu();
    
  }, []);

  //sends a dispatch to the menu reducer to set it to the present "pizza" table via an axios.GET
const setMenu = () => {
    axios.get('/api/pizza')
    .then( response => {
        dispatch({
            type: 'SET_MENU',
            payload: response.data
          })
    })
    .catch(error => {
        console.log('error getting menu', error);
    })     
}

//sends a dispatch to the menu reducer to set the above 



// added by tucker 330pm \/
function handleAdd (ID, isAdd) {
    console.log('Adding Pizza');
    dispatch({
        type: 'ADD_TO_CART',
        payload: ID
      })
}
function handleRemove (ID, isAdd) {
    console.log('Removing Pizza');
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: ID
      })
}

// conditionally rendered button that also sends the above dispatches on click 
function addOrRemove (ID) {
    if (isAdd) {
    
        return <button onClick={handleAdd}>Add</button>
    } else if (!isAdd) {
        
        return <button onClick={handleRemove}>Remove</button>
    }
}

    return (
        <div>
            <div className="display">
          
            {menu.map((item) => 
            
             <div className="menu-card" key={item.id}>
             <div className="img-div">
                <img className="pizza-img" src={item.image_path} alt="" />
             </div>
             <div className="pizza-description">
                <p>{item.name}</p>
                <p>{item.description}</p>
             </div>
             <div className="card-button">
                 {addOrRemove(item.ID)}

                 {/* <button onClick={addOrRemove(item.id, isAdd)}></button> */}
             </div>
 
 
         </div>
        )}

            </div>

            <button>Next</button>

        </div>

    )
}




export default MenuForm