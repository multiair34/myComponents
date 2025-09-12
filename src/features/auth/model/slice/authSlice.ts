import {createSlice} from "@reduxjs/toolkit";
// import type {RootState} from "../../app/store/store.ts";

export interface ModalState {
  isOpen: boolean;
  isReg: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isReg: false,
}

export const AuthSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalEntry: (state:ModalState) => {
      state.isOpen = !state.isOpen;
    } ,
    openRegistration: (state:ModalState) => {
      state.isReg = !state.isReg;
      state.isOpen = false
    },
  }
})

export const {openModalEntry, openRegistration} = AuthSlice.actions;
export default AuthSlice.reducer;
// export const selectTheme = ((state: RootState) => state.theme.theme)