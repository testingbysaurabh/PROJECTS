import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    id: null,
    data: [],
  },
  reducers: {
    addItems: (state, action) => {
      if (!state.id) {
        state.id = action.payload.itemId;
      }
      if (state.id != action.payload.itemId) {
        toast.error("Not added to cart")
        return;
      } else {
        const flage = state.data.find((item) => {
          return item.id == action.payload.info.id;
        });

        if (!flage) {
          state.data.push({ ...action.payload.info, quantity: 1 });
          toast.success(`${action.payload.info.name} added to the cart`);
        } else {
          for (let item of state.data) {
            if (item.id == action.payload.info.id) {
              item.quantity = item.quantity + 1;
            }
          }

          toast.success(`${action.payload.info.name} added to the cart`);
        }
      }
    },

    removeItems: (state,action)=>{
        if(!state.data.length){
                toast.error('Cart Empty')
                return
        }

        for(let i=0;i<state.data.length;i++){
            if(state.data[i].id== action.payload.id){
                if(state.data[i].quantity > 1){
                    state.data[i].quantity = state.data[i].quantity -1
                }else{
                    state.data.splice(i,1)
                }
            }
        }
    },

    clearItems :  (state,action)=>{
        state.data=[]
        state.id =""
        toast.success('Cart Empty')
    }
  },
});

export default cartSlice.reducer;
export const { addItems, removeItems ,clearItems} = cartSlice.actions;
