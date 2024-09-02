import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: []
  },
  reducers: {
    addtocart: (state , action) => {
     let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id) 
  
     console.log(findProduct);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = ProductSlice.actions

export default ProductSlice.reducer