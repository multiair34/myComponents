import styles from "./Header.module.scss"
import cls from "classnames"

import {ThemeButton} from "../../../entityes/ThemeButton";
import {useAuthModals} from "../../../features/auth/"
import {LoginOutlined} from "@ant-design/icons";

export const Header = () => {
  const {toggleLoginModal} = useAuthModals()

    return (
        <header className={cls(styles.Wrapper)}>
          <div className={cls(styles.header)}>
            <h1 className={cls(styles.mainText)}>MyComponents</h1>
            <nav className={cls(styles.navigation)}>
              <a className={cls(styles.link)} href="">Главная</a>
              <a className={cls(styles.link)} href="">Каталог</a>
              <a className={cls(styles.link)} href="">TEST</a>
            </nav>
            <div className={cls(styles.login)}>
              <ThemeButton />
              <LoginOutlined onClick={toggleLoginModal} className={cls(styles.btn)} />
            </div>
          </div>
        </header>
    );
};
