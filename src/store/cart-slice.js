import { createSlice } from "@reduxjs/toolkit"
import AppService from "../AppService";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        productList:[],
        totalPrice: 0,
        isItemAdded:0,
        changed:false
    },
    reducers: {
        updateCartData(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.itemsList = action.payload.itemsList
            state.totalPrice = action.payload.totalPrice
        },
        addToCart(state, action) {
            state.changed = true;
            const newItem = action.payload;
            //check if the item already exist
            //const existingItem = state.itemsList.find((item)=>item.id === newItem.id)
            const existingItem = state.itemsList.find((item)=>item.name === newItem.name)
            if(existingItem) {
                existingItem.quantity++;
                //existingItem.price+= newItem.price
                existingItem.totalPrice+= existingItem.price

            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                
            }
            state.totalQuantity++
            state.totalPrice = state.totalPrice + newItem.price
            //state.isItemAdded = !state.isItemAdded
            if(!state.isItemAdded) {
                state.isItemAdded++
            }
           
        },

        hideNotification(state, action) {
            if(state.isItemAdded) {
                state.isItemAdded--
            }
        },
        
        removeFromCart(state, action) {
            state.changed = true;
            const id = action.payload;
            const existingItem = state.itemsList.find(item => item.id === id)

            if(existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id != id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                
            }
            state.totalQuantity--
            state.totalPrice = state.totalPrice - existingItem.price
        },
        setShowCart(state) {
            state.showCart = true;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;