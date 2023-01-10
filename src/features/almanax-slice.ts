import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DataProps } from '../models/data'
import { language } from '../models/language'

interface Almanax {
    language: string,
    days: number,
    array: DataProps[],
    bonus: string[],
}

const initialState: Almanax = {
    language: language.En,
    days: 20,
    array: [],
    bonus: [],
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
    }
})

export const {
    setLanguage,
    setDays,
    createArray,
} = almanaxSlice.actions
export default almanaxSlice.reducer