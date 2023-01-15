import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DataProps } from '../models/data'
import { FilterSearch, FilterProps } from '../models/filter'
import { language } from '../models/language'

interface Almanax {
    language: string,
    days: number,
    array: DataProps[],
    filter: FilterSearch,
}

const initialState: Almanax = {
    language: language.Fr,
    days: 20,
    array: [],
    filter: FilterSearch.None
}

const almanaxSlice = createSlice({
    name: 'almanax',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload
        },
        setDays(state, action: PayloadAction<number>) {
            state.days = action.payload
        },
        createArray(state, action: PayloadAction<DataProps[]>) {
            state.array = action.payload
        },
        setFilter(state, action: PayloadAction<FilterSearch>) {
            state.filter = action.payload
        },
    }
})

export const {
    setLanguage,
    setDays,
    createArray,
    setFilter,
} = almanaxSlice.actions
export default almanaxSlice.reducer