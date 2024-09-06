import { createSlice } from '@reduxjs/toolkit'
 

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  },
  reducers: {
    addtocart: (state , action) => {
     let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id) ;
     if(findProduct !== -1){
      state.cartItem[findProduct].qun +=1
      localStorage.setItem("cart" ,JSON.stringify(state.cartItem))
     }else{
       state.cartItem = [...state.cartItem,action.payload]
       localStorage.setItem("cart" ,JSON.stringify(state.cartItem))
     }
  
    },
    productIncrement:( state ,action)=>{
    state.cartItem[action.payload].qun += 1
    localStorage.setItem("cart" ,JSON.stringify(state.cartItem))
    },

   
    productDecrement:( state ,action)=>{
     if( state.cartItem[action.payload].qun > 1){
      state.cartItem[action.payload].qun -= 1
      localStorage.setItem("cart" ,JSON.stringify(state.cartItem))
     }else{

     }
    },
    removeProduct:( state ,action)=>{
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem("cart" ,JSON.stringify(state.cartItem))
    },
    removeallProduct:(state , action)=>{
     state.cartItem.splice(action.payload, 1)
     localStorage.setItem("cart" ,JSON.stringify(state.cartItem))
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addtocart ,productIncrement,productDecrement,removeProduct,removeallProduct } = ProductSlice.actions

export default ProductSlice.reducer