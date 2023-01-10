import { configureStore } from '@reduxjs/toolkit'
import almanaxReducer from '../features/almanax-slice'
import { apiSlice } from '../features/almanax/almanax-api-slice'

export const store = configureStore({
  reducer: {
    almanax: almanaxReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
