import { uiActions } from "../store/ui-slice";

const fetchData = () => {
    return async(dispatch) => {
        const fetchHandler = async() => {
            const resp = await fetch("https://react-redux-cart-6457c-default-rtdb.firebaseio.com/cartItems.json");
            const data = resp.json();
            return data;
        }
    }
}