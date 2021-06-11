import { useSelector } from "react-redux";
import CheckoutRow from "../CheckoutRow/CheckoutRow";

function Checkout() {
  const cart = useSelector((store) => store.cartReducer);
  const info = useSelector((store) => store.infoReducer);

  console.log("cart", cart);
  console.log("info", info);

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
      <table className="">
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
