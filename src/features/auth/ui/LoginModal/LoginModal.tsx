import styles from "./LoginModal.module.scss"
import cls from "classnames"
import {Button} from "../../../../shared/ui/Button";
import {useAuthModals} from "../../lib/hooks/useAuthModals.ts"

export const LoginModal = () => {
    const {toggleLoginModal, toggleSignUpModal} = useAuthModals();

    return (
        <div className={cls(styles.wrapper)}>
            <div className={cls(styles.head)}>
              <h1 className={cls(styles.mainText)}>Вход</h1>
              <span
                onClick={toggleLoginModal}
                className={cls(styles.ExitButton)}
              >
                ✖
              </span>
            </div>
            <form className={cls(styles.ModalEntry)}>
              <div className={cls(styles.item)}>
                <span className={cls(styles.itemText)}>Логин</span>
                <input className={cls(styles.itemInput)} type="text"/>
              </div>
              <div className={cls(styles.item)}>
                <span className={cls(styles.itemText)}>Пароль</span>
                <input className={cls(styles.itemInput)} type="password"/>
              </div>
              <div className={cls(styles.linkCont)}>
                <a className={cls(styles.link)} href="#">Забыли пароль?</a>
                <a
                  onClick={toggleSignUpModal}
                  className={cls(styles.link)}
                  href="#"
                >
                  Зарегистрироваться
                </a>
              </div>
              <div className={cls(styles.item)}>
                <span>Запомнить меня</span>
                <input type="checkbox"/>
              </div>
              <Button children="Войти"/>
            </form>
        </div>
    );
};
