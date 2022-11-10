import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () => {
    const quantity = useSelector((state)=>state.cart.totalQuantity)
    const cartItems = useSelector((state)=>state.cart.itemsList)
    const totalItemsPrice = useSelector((state)=>state.cart.totalPrice)

    return (
        <div className="cart">
            <h3>Cart: {quantity} Items in cart ${totalItemsPrice}</h3>

            <div>
                <ul>
                    Cart items: {cartItems?.length}
                    {cartItems?.map((item)=>(
                    
                    <li key={item.id}> <CartItem id={item.id}
                         name={item.name}
                         price={item.price}
                         quantity={item.quantity}
                         total={item.totalPrice}
                         />
                    </li>
                ))}
                    
                </ul>
             </div>

             Total Price: {totalItemsPrice}

        </div>
    )
}

export default Cart