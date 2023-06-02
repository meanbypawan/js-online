import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer:{
        category: CategorySlice,
        user: UserSlice
    }
});

export default store;