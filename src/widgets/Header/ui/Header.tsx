import styles from "./Header.module.scss"
import {ThemeButton} from "../../../entityes/ThemeButton";
import {useAuthModals} from "../../../features/auth/"
import {LoginOutlined} from "@ant-design/icons";

export const Header = () => {
  const {toggleLoginModal} = useAuthModals()
    return (
        <header className={styles.Wrapper}>
          <div className={styles.header}>
            <h1 className={styles.mainText}>MyComponents</h1>
            <nav className={styles.navigation}>
              <a className={styles.link} href="">Главная</a>
              <a className={styles.link} href="">Каталог</a>
              <a className={styles.link} href="">TEST</a>
            </nav>
            <div className={styles.login}>
              <ThemeButton />
              <LoginOutlined onClick={toggleLoginModal} className={styles.btn} />
            </div>
          </div>
        </header>
    );
};
