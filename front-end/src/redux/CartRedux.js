import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name : "cart",
    initialState : {
        user : null,
        products : [],
        quantity : 0,
        total : 0,
    },
    reducers : {
        addProducts : (state,action) =>{
        state.user = action.payload.user
        state.quantity +=1 ;
        state.products.push(action.payload.products) ;
        // state.products.push(action.payload) ;
        state.total += action.payload.products.price * action.payload.products.quantity ;
                
    },
    deleteProducts :(state,action) =>{
            state.user = null;
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const {addProducts,deleteProducts} = CartSlice.actions
export default CartSlice.reducer