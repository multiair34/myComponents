import styles from "./ThemeButton.module.scss"
import cls from "classnames"
import {useTheme} from "../lib/hooks/useTheme.ts"

export const ThemeButton = () => {
    const {toggleTheme} = useTheme()

    return (
        <button onClick={toggleTheme} className={cls(styles.ThemeButton)}>
          Theme
        </button>
    );
};
