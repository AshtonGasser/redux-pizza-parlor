import { useEffect } from "react"
import { useSelector,  useDispatch } from "react-redux"
import MenuItem from '../MenuItem/MenuItem'
import axios from 'axios'


function MenuForm () {
    const dispatch = useDispatch()
    const menu = useSelector(store => store.menuReducer)

      // get Artists data from server on load
  useEffect(() => {
    console.log('in useEffect');
    setMenu();
    getMenu();
  }, []);

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

const getMenu = () => {
    axios.get('/api/pizza')
    .then( response => {
        dispatch({
            type: 'GET_MENU',
            
          })
    })
    .catch(error => {
        console.log('error getting menu', error);
        
    })     

}



    return (
        <div>
            <div className="display">
          
            {menu.map((item) => 
          <MenuItem key={item.id} />
        )}

            </div>

            <button>Next</button>

        </div>

    )
}




export default MenuForm