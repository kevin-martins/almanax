import { configureStore } from '@reduxjs/toolkit'
import almanaxReducer from '../features/dofus-slice'

export const store = configureStore({
  reducer: {
    dofus: almanaxReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
