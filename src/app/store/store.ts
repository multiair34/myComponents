import { configureStore } from "@reduxjs/toolkit";
import {ThemeSlice} from "../../features/ThemeSlice/ThemeSlice.ts";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>