import { configureStore } from '@reduxjs/toolkit';

// Reducer Imports
import cartModalReducer from "./slices/cartModalSlice"

const store = configureStore({
  reducer: {
    cartModal: cartModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
