import type {RootState} from "../../../../app/providers/store/store.ts";

export const themeSelector = (state: RootState)=> state.theme.theme
