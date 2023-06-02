import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import WebApi from "../apis/WebApi";

export const fetchCart = createAsyncThunk("cart/fetchCart",async(userId)=>{
    let response = await axios.post(WebApi.LOAD_CART,{userId});
    return response;
});
export const addItemInToCart = createAsyncThunk("cart/addItemInToCart",async({userId,productId})=>{
  let response = await axios.post(WebApi.ADD_CART_ITEM,{userId,productId});   
  return response;
});
const slice = createSlice({
    name: "cart",
    initialState:{
        cartItems: [],
        cartError: null
    },
    reducers:{
        updateCartItem: (state,action)=>{
           let product = action.payload;
           state.cartItems = [...state.cartItems,{productId: product}]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            state.cartItems = action.payload[0].cartItems;
        }).addCase(fetchCart.rejected,(state,action)=>{
            console.log("Rejected.....");
        }).addCase(addItemInToCart.fulfilled,(state,action)=>{
            
        }).addCase(addItemInToCart.rejected,(state,action)=>{
            window.alert("Rejected........");
        })
    }
})
export const {updateCartItem} = slice.actions;
export default slice.reducer;