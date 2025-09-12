import type {RootState} from "../../../../app/providers/store/store.ts";

export const isOpenSelector = (state: RootState) => state.modal.isOpen
export const isRegSelector = (state: RootState) => state.modal.isReg