import styles from "./ThemeButton.module.scss"
import {toggleTheme} from "../../../features/ThemeSlice/ThemeSlice.ts";
// import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch} from "../../../app/hooks.ts";


export const ThemeButton = () => {
    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(toggleTheme())} className={styles.ThemeButton}>
          switch theme mode
        </button>
    );
};