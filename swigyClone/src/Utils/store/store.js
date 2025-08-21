import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./CartSlice"
const store =configureStore({
    reducer:{
            cart: cartSliceReducer
    }
})

export default store