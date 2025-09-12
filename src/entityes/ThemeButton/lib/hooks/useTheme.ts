import {useAppDispatch, useAppSelector} from "../../../../shared/hooks/reduxHooks.ts";
import {toggleTheme as toggleThemeAction} from "../../model/slice/themeSlice.ts";
import {themeSelector} from "../../model/selectors/";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelector)
  const toggleTheme = () => {
    dispatch(toggleThemeAction())
  }
  return {theme, toggleTheme};
}

