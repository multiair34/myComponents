import { configureStore } from "@reduxjs/toolkit";
import {ThemeSlice} from "../../../entityes/ThemeButton/model/slice/themeSlice.ts";
import {AuthSlice} from "../../../features/auth/model/slice/authSlice.ts";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
    modal: AuthSlice.reducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
