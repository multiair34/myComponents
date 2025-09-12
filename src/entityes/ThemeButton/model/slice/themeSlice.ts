import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../../../app/providers/store/store.ts";

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: "light",
}

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
})

export const {toggleTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
export const selectTheme = ((state: RootState) => state.theme.theme)