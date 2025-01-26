import {configureStore, createSlice} from '@reduxjs/toolkit'

// createSlice({ // useState 역할
//   name: "state이름",
//   initialState: '값'
// })

// let user = createSlice({ // useState 역할
//   name: "user",
//   initialState: 'Kim'
// })

// let stock = createSlice({ // useState 역할
//   name: "stock",
//   initialState: [10, 11, 12]
// })

let cart = createSlice({
  name: "cart",
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})

export default configureStore({
  reducer: {
    // 여기에 등록해야 사용가능
    // 작명: user.reducer
    cart: cart.reducer
  }
})