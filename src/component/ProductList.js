import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { productActions, selectAllProducts, fetchProducts } from "../store/product-slice";
import axios from "axios";

import AppService from "../AppService";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

//axios.defaults.withCredentials = true;

//import "./product.css"


const ProductList = ({imgURL}) => {
    
    const cartItems = useSelector((state)=>state.cart.itemsList)
    
    const [price, setPrice] = useState(0)
    const [name, setName] = useState("")
    const [plist, setPlist] = useState([])
    const dispatch = useDispatch()
    //const products = useSelector(selectAllProducts)
    const products = useSelector((state) => state.products.products)
    //const quantity = useSelector((state)=>state.cart.totalQuantity)
    let postStatus = useSelector(state => state.products.status)
    //let plist = []
  useEffect(() => {
   if (postStatus === 'idle') {
   let productss =   dispatch(fetchProducts())


  }


  }, [postStatus,products.length])



  let content

  if (postStatus === 'loading') {
   
    content = <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
   
    const orderedProducts = products
      .slice()
      .sort((a, b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0))
     // .sort((a, b) => b.date.localeCompare(a.date))
     
     console.log("The post status ", postStatus, plist.length)
    
     //products.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    content = products.length&&orderedProducts.map(item => (
        <div key={item.id} style={{width:"33%"}}> 
        <ProductItem id={item.id}
        name={item.name}
        price={item.price}
        isItemAdded={1}

        />
        </div>
    ))
  } else if (postStatus === 'failed') {
    //content = <div>{error}</div>
    content = <div>error loading products</div>
  }
    
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

        dispatch(cartActions.addToCart({
            //id,
            price,
            name
        }))

    }

    
    return (
        <div>
             Product items: {products.length}
              
             <div className="row" style={{display:"flex", 
                             flexDirection:"row", width:"96%",
                             marginLeft:"2%"}}   >
    
                   
                     {content}
              
                        
             </div> 

            
        </div>
    )
}

export default ProductList