import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../apis/WebApi";
import axios from "axios";

export const fetchCategory = createAsyncThunk("category/fetchCategory",async()=>{
     let response = await axios.get(WebApi.LOAD_CATEGORY);
     console.log(response);
     return response.categories;
});
const slice = createSlice({
    name: 'category',
    initialState:{
        categoryList: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.isLoading = true
        }).addCase(fetchCategory.fulfilled,(state,action)=>{
            state.categoryList = action.payload;
            state.isLoading = false; 
        }).addCase(fetchCategory.rejected,(state,action)=>{
            state.error = "Oops! something went wrong...";
        })
    }
});

export default slice.reducer;