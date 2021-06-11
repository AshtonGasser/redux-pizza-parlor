import { useSelector } from "react-redux";

// calculates a total cost base on cart[i].price, returns cost as a locale dollar string

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