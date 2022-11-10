import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { uiActions } from "../store/ui-slice";

const CartItem = ({id,name,price,quantity,total}) => {
    const dispatch = useDispatch();

    const incrementItems = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price
        }))

        dispatch(uiActions.show({message:"Product added to basket"}))

        setTimeout(()=>{
            //dispatch(cartActions.hideNotification())
            dispatch(uiActions.hide())
        },6000)
    }

    const decrementItems = () => {
        dispatch(cartActions.removeFromCart(id))
        dispatch(uiActions.show({message:"Product removed from basket"}))
    }
    return (
        
            <div className="cart-item card">
                 <span>id: {id}</span>
                 <span className="item-name"> {name}</span>
                 <span style={{fontSize:"30px",color:"tomato"}}>${price}</span>
                 <span>x {quantity}</span>
                 <span>total: {total}</span>
                 <div>
                    <button onClick={incrementItems}>+</button>
                    <button onClick={decrementItems}>-</button>
                 </div>
                 
            </div>
        
    )

}

export default CartItem