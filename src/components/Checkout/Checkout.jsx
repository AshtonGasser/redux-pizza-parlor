
import { useSelector } from 'react-redux';
import React from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'



function Checkout() {
    const dispatch = useDispatch()
    const CheckoutList = useSelector(store => store.checkout)


    axios.post('/api/pizza')
        .then(response => {

            dispatch({
                type: 'GET_CHECKOUT',
                payload: response.data
            })

        })

    return (
        <div>
            <div className="display">
                {/* //menu, cust, checkout */}
                <table>
                    <tbody>Checkout Table</tbody>
                </table>
            </div>
            <button>Next</button>

        </div>

    )

}



function Checkout() {
    const dispatch = useDispatch()


    const CheckoutList = useSelector(store => store.cartReducer)

    const handleCheckout = () => {
        axios.post('/')
            .then(response => {

                dispatch({
                    type: 'GET_CHECKOUT',
                    payload: response.data
                })
            }).catch(err => {
                console.log(err);
            })
    }

    
    

    return (
        <div>
            <div className="display">
                {/* //menu, cust, checkout */}
                <table>
                    <tbody>Checkout Table</tbody>
                </table>
            </div>
            <button>Next</button>

        </div>

    )

}
export default Checkout;



// ### ORDER - CHECKOUT

// Users should not be able to modify item totals on this screen. When they click checkout, the user information, 
// order total and array of pizzas should be sent to the server. After the checkout is complete, 
// navigate the user back to the **select pizza** page AND clear out the reducers as appropriate. Each order should begin with "clean" order data 
// (cart, address, etc).