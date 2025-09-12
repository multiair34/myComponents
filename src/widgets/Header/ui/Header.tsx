import styles from "./Header.module.scss"
import {ThemeButton} from "../../../entityes/ThemeButton";
import {useAuthModals} from "../../../features/auth/"

export const Header = () => {
  const {toggleLoginModal} = useAuthModals()
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
              <button onClick={toggleLoginModal}>ВОЙТИ</button>
            </div>
          </div>
        </header>
    );
};