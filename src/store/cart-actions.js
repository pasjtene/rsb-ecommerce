import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async(dispatch) => {
        const fetchHandler = async() => {
            const resp = await fetch("https://react-redux-cart-6457c-default-rtdb.firebaseio.com/cartItems.json");
            const data = resp.json();
            return data;
        }

        try {
            const cartData = await fetchHandler();
            console.log("The cart data: ",cartData)
            dispatch(cartActions.updateCartData(cartData))
        } catch(err) {
            dispatch(
                uiActions.show({message:"fetching cart data failed"})
            )
        } 

        
    }
}