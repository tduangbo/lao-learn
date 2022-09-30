import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Xp8Z-3K0J1o',
}

export const grammSlice = createSlice({
    name: 'gramma',
    initialState,
    reducers: {
    //   increment: (state) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.value += 1
    //   },
    //   decrement: (state) => {
    //     state.value -= 1
    //   },
      switchLecture: (state, action) => {
        console.log(action.payload);
        state.value = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, switchLecture} = grammSlice.actions
  
  export default grammSlice.reducer