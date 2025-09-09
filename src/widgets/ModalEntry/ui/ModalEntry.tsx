import styles from "./ModalEntry.module.scss"

export const ModalEntry = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
              <h1 className={styles.mainText}>Вход</h1>
              <span className={styles.ExitButton}>✖</span>
            </div>
            <form className={styles.ModalEntry}>
              <div className={styles.item}>
                <span className={styles.itemText}>Логин</span>
                <input className={styles.itemInput} type="text"/>
              </div>
              <div className={styles.item}>
                <span className={styles.itemText}>Пароль</span>
                <input className={styles.itemInput} type="password"/>
              </div>
              <div className={styles.linkCont}>
                <a className={styles.link} href="">Забыли пароль?</a>
                <a className={styles.link} href="">Зарегистрироваться</a>
              </div>
              <div className={styles.item}>
                <span>Запомнить меня</span>
                <input type="checkbox"/>
              </div>
              <button className={styles.ModalButton}>Войти</button>
            </form>
        </div>
    );
};