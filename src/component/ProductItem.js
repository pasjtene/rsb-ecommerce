import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { uiActions } from "../store/ui-slice";
import Notification from "./Notification";

const ProductItem = ({id,name,price,quantity,total,isItemAdded}) => {
    const dispatch = useDispatch();
    const notification = useSelector(state =>state.ui.notification)
    const sno = useSelector(state =>state.ui.notification.open)

    const addToCart= () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price,
            isItemAdded
        }))

        dispatch(uiActions.show({message:"Product added to basket"}))

        setTimeout(()=>{
            dispatch(cartActions.hideNotification())
        },6000)
    }

    const decrementItems = () => {
        dispatch(cartActions.removeFromCart(id))
    }
    return (
        <div>
            <span className="cart-item card" style={{width: "28rem", marginLeft:"15px", marginBottom:"15px"}}>
                <div className="card-header">
                <span> {name}</span>
                </div>
               
                 <span>id: {id}</span>
                 
                 <span style={{fontSize:"40px"}}>${price}</span>
                 <span>x {quantity}</span>
                 <span>total: {total}</span>
                 <button onClick={addToCart}>Add to cart</button>


            </span>
        </div>
    )

}

export default ProductItem