import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Asynchronous call
// Pending, Fullfilled, Rejected
export const fetchCategory = createAsyncThunk("category/fetchCategory",async()=>{
   let response = await  axios.get("http://localhost:3000/category/list");
   return response.data.result;
});
const slice = createSlice({
    name: 'category',
    initialState:{
        categoryList: [],
        error: false,
        isLoading: false
    },
    reducers:{
       remove: (state,action)=>{
          let categoryId = action.payload;
          let index = state.categoryList.findIndex((category)=>category._id == categoryId);
          state.categoryList.splice(index,1);
       },
       add: (state,action)=>{
          state.categoryList = [...state.categoryList,action.payload];
       }
    },
    extraReducers: (builder)=>{
       builder.addCase(fetchCategory.pending,(state,action)=>{
          state.isLoading  = true;
       });
       builder.addCase(fetchCategory.fulfilled,(state,action)=>{
          state.categoryList = action.payload;
          state.isLoading = false;
       });
       builder.addCase(fetchCategory.rejected,(state,action)=>{
        state.error = "Oops ! something went wrong"
       });  
    }
});
export const {remove,add} = slice.actions;
export default slice.reducer;