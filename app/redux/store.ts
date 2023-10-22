import { configureStore } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./features/hamburgerMenuSlice";
import menuCategoryFilterReducer from "./features/menuCategoryFilterSlice";
import menuItemNameReducer from "./features/menuItemNameSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    hamburgerMenuReducer,
    menuCategoryFilterReducer,
    menuItemNameReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
