import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'user',
    initialState:{
        user: null,
        isLoggedIn: false
    },
    reducers:{
        setUser: (state,action)=>{
          state.user = action.payload;
          state.isLoggedIn = true
        }
    }
});
export const {setUser} = slice.actions;
export default slice.reducer;