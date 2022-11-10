import React, { useEffect } from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { cartActions } from "../store/cart-slice";


const Notification = ({type, message, open}) => {
    const notification = useSelector((state)=>state.cart.isItemAdded)
    const dispatch = useDispatch();

    const handleClose = () => {
        //dispatch(cartActions.hideNotification())
        dispatch(uiActions.hide())
    }

    return (
        <div>
         <Alert onClose={()=>{handleClose()}} severity="success">{message}</Alert>
        </div>
    )
}

export default Notification