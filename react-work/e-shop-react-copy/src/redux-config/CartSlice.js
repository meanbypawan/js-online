import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from '../WebApi/api';

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId)=>{
   let response = await axios.post(apiEndPoint.FETCH_CART,{userId});
   return response.data[0].cartItems;
});

export const addItemInToCart  = createAsyncThunk("cart/addItemInToCart",async(obj)=>{
  let response = await axios.post(apiEndPoint.ADD_TO_CART,{userId: obj.userId, productId: obj.productId});
  if(response.data.status)
    return response.data;
});
const slice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: [],
        cartError: null,
        flag: false,
        totalBillAmount: 0
    },
    reducers:{
        updateCartItems: (state,action)=>{
          state.cartItems = [...state.cartItems,{productId:{...action.payload,total:action.payload.price,qty:1}}]; 
        },
        updateQuantity : (state,action)=>{
            let index = action.payload.index
            let product = state.cartItems[index];
            product.productId.qty = action.payload.qty;
            product.productId.total = product.productId.price*product.productId.qty;
            state.cartItems.splice(index,1,product);
            let totalBillAmount = 0;
            state.cartItems.map((item,index)=>{
                totalBillAmount = totalBillAmount+ item.productId.price*item.productId.qty;
            });
            state.totalBillAmount=totalBillAmount;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            state.cartItems = action.payload.map((item)=>{
                item.productId.qty = 1;
                item.productId.total = item.productId.price;
                state.totalBillAmount = state.totalBillAmount + item.productId.price;
                return item;
            });
            
        }).addCase(fetchCart.rejected,(state)=>{
            state.cartError = "Oops! somehting went wrong..";
        }).addCase(addItemInToCart.fulfilled,(state,action)=>{
            state.flag = true;
        }).addCase(addItemInToCart.rejected,(state)=>{
            state.cartError = 'Oops! something went wrong';
        });
    }
});
export const {updateCartItems, updateQuantity} = slice.actions;
export default slice.reducer;