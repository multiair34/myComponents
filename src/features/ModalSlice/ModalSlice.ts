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

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalEntry: (state:ModalState) => {
      state.isOpen = !state.isOpen;
    } ,
    openRegistration: (state:ModalState) => {
      if(state.isReg === true) state.isOpen = false
      state.isReg = !state.isReg;
    },
  }
})

export const {openModalEntry, openRegistration} = ModalSlice.actions;
export default ModalSlice.reducer;
// export const selectTheme = ((state: RootState) => state.theme.theme)