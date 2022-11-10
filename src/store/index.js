import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import { authActions } from "./auth-slice";
import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import uiSlice from "./ui-slice";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state, action) {
            state.counter++
        },
        decrement(state, action) {
            state.counter--
        },
        addBy(state, action)  {
            state.counter += action.payload
        }
    }
})



const store = configureStore({
    //reducer: counterSlice.reducer
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        products: productSlice.reducer,
        ui: uiSlice.reducer
    } 
})

export default store;