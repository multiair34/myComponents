import styles from "./Header.module.scss"
import {ThemeButton} from "../../../features/ThemeButton";
import {useAppDispatch} from "../../../app/hooks.ts";
import {openModalEntry} from "../../../features/ModalSlice/ModalSlice.ts";

export const Header = () => {
    const dispatch = useAppDispatch();
    return (
        <header className={styles.Wrapper}>
          <div className={styles.header}>
            <h1 className={styles.mainText}>MyComponents</h1>
            <nav className={styles.navigation}>
              <a href="">Главная</a>
              <a href="">Каталог</a>
              <a href="">TEST</a>
            </nav>
            <div className={styles.login}>
              <ThemeButton />
              <button onClick={() => dispatch(openModalEntry())}>ВОЙТИ</button>
            </div>
          </div>
        </header>
    );
};