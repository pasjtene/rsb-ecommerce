import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import AppService from "../AppService";
import axios from "axios";
const initialState = {
    products: [],
    status: 'idle',
    error: null
  }
  export const fetchProducts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await  axios.get(AppService.app_url("/api/product/list"), {
       // method: 'GET',
        headers: {"Content-Type":"application/json"},
        //credentials: 'include',
       
    })
    console.log("The existing product list", response.data.data.products)
    return response.data.data.products
  })

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
        createProduct(state,action){
            console.log("Createting product..", action.payload)
            state.products = action.payload.map(p=>p)

            console.log("The created..pr", state.products)
        },

        addProduct(state,action) {
            state.products.push(action.payload)
        },

        deleteProduct(state,action) {},
        updateProduct(state,action) {} 
    },

    extraReducers(builder) {
      builder
        .addCase(fetchProducts.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          //state.products = state.products.concat(action.payload)
          //state.products = state.products.concat(action.payload)
          state.products = action.payload.map(p=>p)
          console.log("The ppp", action.payload)
         // state.products = state.products[1]
          
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
})
export const selectAllProducts = state => state.products
export const productActions = productSlice.actions
export default productSlice