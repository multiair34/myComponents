import styles from "./Header.module.scss"
import {ThemeButton} from "../../../features/ThemeButton";

export const Header = () => {
    return (
        <div className={styles.Header}>
          <h1>MyComponents</h1>
          <nav className={styles.navigation}>
            <a href="">Главная</a>
            <a href="">Каталог</a>
            {/*<a href="">иди нахуй</a>*/}
          </nav>
          <div className={styles.login}>
            <ThemeButton />
            <button>ВОЙТИ</button>
          </div>
        </div>
    );
};