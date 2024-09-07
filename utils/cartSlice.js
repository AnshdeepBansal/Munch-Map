import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state , action)=>{
            const exsitingItem = state.items.find((item) => item.id === action.payload.id);
            if(exsitingItem)
                    state.items = state.items.map((item) => item.id === action.payload.id?{...item,qty : item.qty +1}:item);
            else
                state.items.push(action.payload);
        },
        removeItem:(state , action)=>{
            state.items = state.items.filter((item) => item.id != action.payload.id);
        },
        DecQnty:(state , action)=>
        {
            state.items = state.items.map((item) => item.id === action.payload.id?{...item,qty : item.qty -1}:item);
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }   
    }
});

export const{addItem,removeItem,clearCart,DecQnty} = cartSlice.actions;

export default cartSlice.reducer;