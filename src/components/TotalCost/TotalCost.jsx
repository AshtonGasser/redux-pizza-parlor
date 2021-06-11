import { useSelector } from "react-redux";


function TotalCost () {
    function calculateCost () {
        const cart = useSelector((store) => store.cartReducer);
        let cost = 0;
        cart.forEach(item => {
            cost += Number(item.price)
        });
    return cost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    }
    return (
        <p>{calculateCost()}</p>
    )
}

export default TotalCost