import { createSlice } from "@reduxjs/toolkit";
// Async Thunk
const slice = createSlice({
    name:'master',
    initialState:{
       title: 'React Redux Implementation',  
       name: 'dffa'
    },
    reducers:{
        changeValue: (state,action)=>{
          state.name = action.payload;       
        }
    }
});

export const {changeValue} = slice.actions;
export default slice.reducer;