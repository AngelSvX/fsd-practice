
import userReducer from '../../features/users/model/slice'
import countrieReducer from '../../features/countries/model/slice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    countrie: countrieReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch