import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 2,
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            // state.cartItems = [];
            return { 
                cartItems: [], 
                amount:0, 
                total:0 
            };
        }
    },
});

console.log(cartSlice);

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;