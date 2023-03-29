import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlmanaxProps } from '../models/almanax'

interface Dofus {
  isLoading: boolean,
  days: number,
  almanax: AlmanaxProps[],
  filtersOptions: string[],
  currentFilter: string,
}

const initialState: Dofus = {
  isLoading: true,
  days: 15,
  almanax: [],
  filtersOptions: [],
  currentFilter: "Aucun",
}

const almanaxSlice = createSlice({
  name: 'dofus',
  initialState,
  reducers: {
    setDays(state, action: PayloadAction<number>) {
      state.days = action.payload
    },
    setFiltersOptions(state, action: PayloadAction<string[]>) {
      state.filtersOptions = ["Aucun", ...action.payload]
      // state.filtersOptions = 
    },
    setCurrentFilter(state, action: PayloadAction<string>) {
      state.currentFilter = action.payload
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
  setFiltersOptions,
  setCurrentFilter,
  setAlmanax,
  setLoading,
} = almanaxSlice.actions
export default almanaxSlice.reducer