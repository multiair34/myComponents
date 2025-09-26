import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../../../app/providers/store/store.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const LOCAL_STORAGE_THEME_KEY = "theme"
const Storage_Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: Storage_Theme,
}

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState) => {
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, state.theme);
      console.log(state.theme);
    }
  }
})

export const {toggleTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
export const selectTheme = ((state: RootState) => state.theme.theme)
