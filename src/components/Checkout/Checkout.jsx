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
            return <CheckoutRow item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Checkout;


// change [0] to .length