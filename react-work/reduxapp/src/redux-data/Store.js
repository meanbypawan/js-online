import { configureStore } from "@reduxjs/toolkit";
import MasterSlice from './MasterSlice';
import UserSlice from "./UserSlice";
const store = configureStore({
    reducer:{
        myData: MasterSlice,
        user: UserSlice

    }
});
export default store;
// myData is state