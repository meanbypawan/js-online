import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'user',
    initialState:{
        name: 'Rahil',
        age: 23,
        mobile: "9009111222"
    }
});

export default slice.reducer;