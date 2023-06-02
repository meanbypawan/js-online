import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import UserSlice from "./UserSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer:{
        category: CategorySlice,
        user: UserSlice,
        cart: CartSlice
    }
});

export default store;