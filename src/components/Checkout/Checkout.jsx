function Checkout() {

return (
    <p>Checkout</p>
)

} 




export default Checkout


// ### ORDER - CHECKOUT

// Users should not be able to modify item totals on this screen. When they click checkout, the user information, 
// order total and array of pizzas should be sent to the server. After the checkout is complete, 
// navigate the user back to the **select pizza** page AND clear out the reducers as appropriate. Each order should begin with "clean" order data 
// (cart, address, etc).