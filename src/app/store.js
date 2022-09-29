import { configureStore } from '@reduxjs/toolkit'
import grammaReducer from '../components/Gramma/grammaSlice'

export const store = configureStore({
  reducer: {
    gramma: grammaReducer,
  },
})