import { configureStore } from "@reduxjs/toolkit";
import MasterSlice from './MasterSlice';
import UserSlice from "./UserSlice";
import Category from "../components/Category";
import CategorySlice from "./CategorySlice";
const store = configureStore({
    reducer:{
        myData: MasterSlice,
        user: UserSlice,
        category: CategorySlice
    }
});
export default store;
// myData is state