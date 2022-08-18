import { configureStore } from '@reduxjs/toolkit'
import tagSlice from './tagSlice'

export const store = configureStore({
  reducer: {
    tagSlice :tagSlice
  },
})