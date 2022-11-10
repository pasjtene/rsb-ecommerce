import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { productActions, selectAllProducts } from "../store/product-slice";
import ProductList from "./ProductList";
import axios from "axios";

import AppService from "../AppService";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

//axios.defaults.withCredentials = true;

//import "./product.css"


const Product = ({imgURL}) => {
    //const products = useSelector((state)=>state.cart.productList)
   // const products = useSelector(selectAllProducts)
    const cartItems = useSelector((state)=>state.cart.itemsList)
    const products = useSelector((state)=>state.products.products)
    
    const [price, setPrice] = useState(0)
    const [name, setName] = useState("")
    const [id, setId] = useState(cartItems.length +1)

    useEffect(()=>{
        setId(products.length +1)
    },[id,products.length])

    console.log("The cars items",cartItems)
    console.log("The products", products)
    
    const dispatch = useDispatch()
    
    const addToCart = (e) => {
        e.preventDefault()
        if(name.length < 2) return;


      const p2 =   fetch(AppService.app_url("/api/product/save"), {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        credentials: 'include',
        body: JSON.stringify({
            name,
            price,
            //product
        })
    }).then(resp => {
        //console.log(JSON.stringify(resp))
        const contentType = resp.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
        resp.json().then(d => {
            console.log("Received producst data ..", d.data.product ); 
            console.log("Received auth data ..message ..", d.message ); 
            console.log("Received auth data .. ..", d.statusCode); 
             
        })

        
    } else {
        console.log("Authenthication failed")
    }
       
    }).catch(err => {
        console.log("Authenthication failed")
    })


        dispatch(productActions.addProduct({
            id,
            price,
            name
        }))
    }

    return (
        <div >
             <main className="form-signin form-signin-size w-100 m-auto">
             <img src={imgURL} alt={name} />
            <div className="form-floating">
                    <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}
                            className="form-control"
                            placeholder="Product name"
                        
                    />
                    <label className="floatingInput">Product name</label>
            </div>
            <div className="form-floating">
                    <input type="text" name="price" value={price} 
                    onChange={e=>{setPrice(Number(e.target.value))}}
                            className="form-control"
                            placeholder="$ Price"
                        
                    />
                    <label className="floatingInput">$ Price</label>
            </div>

            <h2>{name}</h2>
            <p>{price}</p>
            <p>{id}</p>
            <button onClick={addToCart}>Create product</button>
             </main>

             <ProductList/>

             
        </div>
    )
}

export default Product