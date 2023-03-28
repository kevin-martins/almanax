import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlmanaxProps } from '../models/almanax'
import { FilterSearch } from '../models/filter'

interface Dofus {
  isLoading: boolean,
  days: number,
  almanax: AlmanaxProps[],
  filters: string[],
}

const initialState: Dofus = {
  isLoading: true,
  days: 40,
  almanax: [],
  filters: []
}

const almanaxSlice = createSlice({
  name: 'dofus',
  initialState,
  reducers: {
    setDays(state, action: PayloadAction<number>) {
      state.days = action.payload
    },
    setFilters(state, action: PayloadAction<string[]>) {
      state.filters = action.payload
    },
    setAlmanax(state, action: PayloadAction<AlmanaxProps[]>) {
      state.almanax = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  },
})

export const {
  setDays,
  setFilters,
  setAlmanax,
  setLoading,
} = almanaxSlice.actions
export default almanaxSlice.reducer