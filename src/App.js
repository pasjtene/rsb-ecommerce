import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
//import { actions } from './store/index';
import { authActions } from './store/auth-slice';
import Auth from './component/Auth';
import Product from './component/Product';
import Cart from './component/Cart';
import ProductList from './component/ProductList';
import Navbar from './component/NavBar';
import { Route, Routes } from "react-router-dom";
import {BrowserRouter as Router}  from "react-router-dom";
import Notification from './component/Notification';
import { useEffect, useState } from 'react';
import { uiActions } from "./store/ui-slice";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@mui/material/Button';
import { cartActions } from "./store/cart-slice";
import { Alert } from "@mui/material";
import { fetchData } from './store/cart-actions';


//let isFirstRender = true;
function App() {
 const cart = useSelector((state)=>state.cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  //const uiNotification = useSelector(state =>state.ui.notification)
  //const sowUiNotification = useSelector(state =>state.ui.showNotification)
  const showNotification = useSelector(state =>state.ui.notification.open)
  const notificationMessage = useSelector(state =>state.ui.notification.message)
  //const notification = useSelector((state)=>state.cart.isItemAdded)
  const totalItemsPrice = useSelector((state)=>state.cart.totalPrice)
  const [open, setOpen] = useState(true);

  
  
  useEffect(()=>{
    dispatch(fetchData())
    console.log("App loaded... geting cart..!!!")
  },[dispatch])
  
  useEffect(()=> {
    const saveCartData = async () => {
      //dispatch(uiActions.show({message:"Adding Product  to cart"}))

      if(cart.changed) {
        const resp = await fetch("https://react-redux-cart-6457c-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(cart)
      }
      );

      const data = await resp.json();
      console.log("Data from fire base,", data)
      }
      
      
    }
    saveCartData().catch(err=>{
      //an error occured
    });
  },[cart])
    


   



  const handleClose = (event, reason) => {
    dispatch(cartActions.hideNotification())
    if (reason === 'clickaway') {
      return;
    }
   
    dispatch(uiActions.show())
    
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <div>

      {isLoggedIn?
      <>
      <div>
        
      <Router>
<Navbar/> 

<h1>Counter App</h1>
      <h2>{isLoggedIn}</h2>  
      <div className='row justify-content-center'>
        <div className='row w-25 justify-content-center'>
          {/* 
               {notification>0&& <Notification message="Product added to card" />  } 
          */}
       
        </div>

        {showNotification&&
        <Snackbar
        anchorOrigin={{ horizontal:"center", vertical:"top" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}>

        <Alert onClose={handleClose} severity="info" >
          {notificationMessage} ! total: ${totalItemsPrice}
        </Alert>

        </Snackbar>
        
      
        }

      
      </div>
     
                      
              <div className="row">
                <div className="col-2 align-self-start">
                  {/* <LeftNav user={user}/> */}
                  Left nave
                </div>
                  <div >
                  <Routes>
                        <Route path="/" element={ <ProductList/>} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/shop" element={<ProductList/>} />
                        <Route path="/product/add" element={<Product />} />

                        <Route path="/login" element={<Auth/>} />
                        
                      </Routes>
                      </div>
              </div>      
              </Router>
        
      </div>

      
      </>
      :<Auth/>}
      {/* 
      <button onClick={increment}>inc +</button>
      <button onClick={decrement}>dec -</button>
      <button onClick={addBy}>Add by 10</button>
  */}
    </div>
  );
}

export default App;
