//import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//import Login from "../pages/Login";
//import {  Authuser, useAuthuser } from "../user/UserContext";
//import { useThemeContext } from "./context/ThemeContext";
//import Cookies from "js-cookie";
//import UserService from "../services/UserService";


 const Navbar = () => {
    const cartItems = useSelector((state)=>state.cart.itemsList)
    const totalCartItemsQuantity = useSelector((state)=>state.cart.totalQuantity)
    const totalItemsPrice = useSelector((state)=>state.cart.totalPrice)

    //const Theme1 = (e:SyntheticEvent) => {
        // get color code from: https://coolors.co/palettes/trending
        const chanTheme = (e) => {
        e.preventDefault()
       

     }

     let menu

        menu = (
            <div className="collapse navbar-collapse float-right" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0 float-right">
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link active" aria-current="page">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product/add" className="nav-link active" aria-current="page" >Create products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link active" aria-current="page" >Cart</Link>
                    </li>
                </ul>
                
        
                <form className="form-inline mt-2 mt-md-0">
                <ul className="navbar-nav me-auto mb-2 mb-md-0 float-right">
                <li className="nav-item">
                         <Link to="/cart" className="nav-link active" aria-current="page">
                            Cart {totalCartItemsQuantity} - ${totalItemsPrice}</Link>
                        
                    </li>

                <li style={{marginRight: "20px"}}>
                    <div className="dropdown-center">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select theme
                    </button>
                    <ul className="dropdown-menu"> 
                    <li id={"#5f0f40"}><a className="dropdown-item" id={"#5f0f40"} 

                        data-color="#fff"
                        data-sbg="#5f506b"
                        data-pbg="#533747"
                        data-pcolor="#fff"
                        data-scolor="#fff"
                        style={{backgroundColor:"#533747", color:"#fff"}} 
                        onClick={(e)=>{chanTheme(e)}} href="#">Theme 1</a>
                        </li>


                        <li><a className="dropdown-item" id="#5465ff" 
                        data-color="#000"
                        data-sbg="#ECF3FF"
                        data-pbg="#AAC9FF"
                        data-pcolor="#000"
                        data-scolor="#000"
                        style={{backgroundColor:"#AAC9FF", color:"#000"}}  
                        onClick={(e)=>{chanTheme(e)}}  href="#">theme 2</a>
                        </li>

                        <li><a className="dropdown-item" id="#463f3a" 
                        style={{backgroundColor:"#463f3a", color:"#fff"}} 
                        onClick={(e)=>{chanTheme(e)}} href="#">theme 3</a>
                        </li>

                        <li><a className="dropdown-item" id="#386641"
                        data-color="#fff"
                        data-sbg="#cad2c5"
                        data-pbg="#84a98c"
                        data-pcolor="#000"
                        data-scolor="#000"
                        
                        
                        style={{backgroundColor:"#84a98c", color:"#000"}} 
                        onClick={(e)=>{chanTheme(e)}} href="#">theme 4</a></li>

                    <li><a className="dropdown-item" id="#000" style={{backgroundColor:"#000", color:"#fff"}} 
                        onClick={(e)=>{chanTheme(e)}} href="#">theme 5</a></li> 

                        <li><a className="dropdown-item" id="#f7f7f2" data-color="#000"  
                        style={{backgroundColor:"#dad7cd", color:"#000"}} 
                        onClick={(e)=>{chanTheme(e)}} href="#000">theme 6</a>
                        </li>

                        <li><a className="dropdown-item" id="#f7f7f2" 
                        data-color="#000"
                        data-sbg="#CCCCCC"
                        data-pbg="#F2F3F5"
                        data-pcolor="#000"
                        data-scolor="#000"
                         data-border="2px solid red"  
                         style={{backgroundColor:"#f7f7f2", color:"#000", border:"2px solid red"}} 
                        onClick={(e)=>{chanTheme(e)}} href="#000">debug theme </a>
                        </li> 

                        <li><a className="dropdown-item" id="#f7f7f2" 
                        data-color="#000"
                        data-sbg="#DADDE1"
                        data-pbg="#F2F3F5"
                        data-pcolor="#000"
                        data-scolor="#000"
                         style={{backgroundColor:"#F2F3F5", color:"#000"}} 
                        onClick={(e)=>{chanTheme(e)}} href="#000">theme 7 </a>
                        </li> 
                    </ul>
                    </div>
                </li>

                    <li className="nav-item">
                       {/*
                            <Link to="/login" className="nav-link active" aria-current="page">Cart {cartItems.lenght}</Link>
                       */}  
                        
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/register" className="nav-link active" aria-current="page" >Register</Link>*/}
                       
                    </li>
                </ul>
                   
                </form>
                </div>
        )
   


    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                {/*<Link to ="/" className="navbar-brand" >Home</Link>*/}
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {menu}
        
            </div>
            </nav>
        </div>
    )
}

export default Navbar