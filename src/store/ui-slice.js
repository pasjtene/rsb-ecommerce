import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    //initialState: {notification: null},
    initialState: {
        showNotification: false,
        snot:0,
        notification: {
        message: "Product added to basket 1",
        type: "warning",
        open: false
    }
},
    reducers: {
        show(state,action) {
            state.showNotification = true
            state.notification.open = !state.notification.open
            state.notification.message = action.payload?.message
            
        },
        hide(state,action) {
            state.showNotification = false
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;