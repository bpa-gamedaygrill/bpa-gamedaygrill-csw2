"use client";

import { store } from "./store";
import { Provider } from "react-redux";

import { Next13ProgressBar } from 'next13-progressbar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <Next13ProgressBar height="4px" color="#DE2f2f" options={{ showSpinner: true }} showOnShallow />
    </Provider>
  );
}
