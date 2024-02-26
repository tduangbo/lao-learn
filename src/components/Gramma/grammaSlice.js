import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Xp8Z-3K0J1o',
  clients: [],
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
        console.log(state.clients)
        console.log(action.payload + "88888");
        state.value = action.payload
      },
      
      clientsConnected: (state, action) => {
        console.log(action.payload)
        state.clients.push(action.payload)
      },

      clientsDisconnected: (state, action) => {
        state.clients = state.clients.filter((client) => client.socketId !== action.payload);

      }

    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, switchLecture, clientsConnected, clientsDisconnected} = grammSlice.actions
  
  export default grammSlice.reducer