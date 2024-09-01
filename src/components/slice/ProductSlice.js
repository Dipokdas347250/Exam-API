import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: 0,
  },
  reducers: {
    addtocart: (state) => {
 
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = ProductSlice.actions

export default ProductSlice.reducer