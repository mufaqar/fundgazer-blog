import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const counterSlice = createSlice({
  name: 'tagSlice',
  initialState,
  reducers: {
    tagValue: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { tagValue } = counterSlice.actions

export default counterSlice.reducer