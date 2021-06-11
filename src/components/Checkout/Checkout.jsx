import { useSelector } from "react-redux";
import CheckoutRow from "../CheckoutRow/CheckoutRow";

function Checkout() {
  const cart = useSelector((store) => store.cartReducer);

  console.log("cart", cart);

  return (
    <div>
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
