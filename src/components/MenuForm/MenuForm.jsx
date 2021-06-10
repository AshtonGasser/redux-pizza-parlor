import { useSelector } from "react-redux"
import MenuItem from './MenuItem/MenuItem'

function MenuForm () {

    const menu = useSelector(store => store.menuReducer)

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