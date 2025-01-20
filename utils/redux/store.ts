import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slice'



export const makeStore = () => {
  return configureStore({
  
    reducer: {
       // Dynamically adds the reducer for API caching  
        ui: uiReducer, // Your global state slice
      },
      // middleware: getDefaultMiddleware =>
      //   getDefaultMiddleware()
          
      //     .concat(apiSlice.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']