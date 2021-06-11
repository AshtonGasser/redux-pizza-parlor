import { useSelector } from "react-redux";
import CheckoutRow from "../CheckoutRow/CheckoutRow";
import axios from 'axios';
import TotalCost from '../TotalCost/TotalCost'

function Checkout() {
  const cart = useSelector((store) => store.cartReducer);
  const info = useSelector((store) => store.infoReducer);

  console.log("cart", cart);
  console.log("info", info);

  function calculateCost () {
    let cost = 0;
    cart.forEach(item => {
        cost += Number(item.price) 
       
    });
    return cost

  // return cost.toLocaleString('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // });
}

  function handleCheckout () {
    console.log('got to handle checkout ');

    cart.forEach(item => {
      item.quantity = 1;
    })
    
    console.log('cart is :', cart)

    postOrder({
      customer_name: info[0].name,
      street_address: info[0].address,
      city: info[0].city,
      zip: info[0].zip,
      type: "Delivery", 
      total : calculateCost(), 
      
      pizzas: cart,

    })

  }

  function postOrder (order) {
     console.log('got to postOrder', order)
      axios.post('/api/order', order)
        .then( response => {
          console.log(response);
        }).catch (error => {
          console.log(error)
        })


        // empty inputs etc

        

  }
  //axios.post('/books', {title, author})

  return (
    <div>
      <div>
        <p>Delivering to:</p>
        <br />
        <p>{info[0].name}</p>
        <p>{info[0].address}</p>  
        <p>{info[0].city}</p>
        <p>{info[0].zip}</p>
      </div>

      <button onClick={handleCheckout}>Checkout</button> 

      <table className="table-class">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>

          {cart.map((item) => {
            return <CheckoutRow key={item.id} item={item} />;
          })}

        </tbody>
      </table>
    </div>
  );
}

export default Checkout;

    {/* button 'checkout' -- POST -- with POST Object data as follows 
      // at end - refresh page 
      {
  "customer_name": "Donatello", ---- inforeduc
  "street_address": "20 W 34th St", ---- inforeduc
  "city": "New York", ---- inforeduc
  "zip": "10001", ---- inforeduc
  "total": "27.98", -- totalcost componenet
  "type": "Pickup", --- neeed still , but on customer page and in inforeducer

  "pizzas": [{ cartreducer - loop over cart produce objects 
    "id": "1",
    "quantity": "1"
  },{
    "id": "2",
    "quantity": "1"
  }]
}
 */}



// change [0] to .length?
