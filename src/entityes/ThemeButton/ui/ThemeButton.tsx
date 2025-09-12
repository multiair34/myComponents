import styles from "./ThemeButton.module.scss"
import {useTheme} from "../lib/hooks/useTheme.ts"

export const ThemeButton = () => {
    const {toggleTheme} = useTheme()

    return (
        <button onClick={toggleTheme} className={styles.ThemeButton}>
          Theme
        </button>
    );
};