import styles from "./SignUpModal.module.scss"
import {Button} from "../../../../shared/ui/Button";
import {useAuthModals} from "../../lib/hooks/useAuthModals.ts"

export const SignUpModal = () => {
    const {toggleSignUpModal} = useAuthModals();
    return (
        <div className={styles.wrapper}>
          <div className={styles.ModalRegistration}>
            <div className={styles.head}>
              <h1 className={styles.mainText}>Регистрация</h1>
              <span
                onClick={toggleSignUpModal}
                className={styles.ExitButton}
              >
                ✖
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.itemText}>Ваше имя</span>
              <input type="text" className={styles.itemInput} required/>
            </div>
            <div className={styles.item}>
              <span className={styles.itemText}>Ваша почта</span>
              <input type="email" className={styles.itemInput}/>
            </div>
            <div className={styles.item}>
              <span className={styles.itemText}>Пароль</span>
              <input type="password" className={styles.itemInput} required/>
            </div>
            <div className={styles.item}>
              <span className={styles.itemText}>Подтвердить пароль</span>
              <input type="password" className={styles.itemInput} required/>
            </div>
            <span className={styles.itemText}>Страна проживания</span>
            <select  name="countryes" id="countryesSelect" className={styles.selectCountry}>
              <option value="russia" className={styles.selectCountryItem}>Russia</option>
              <option value="belarus" className={styles.selectCountryItem}>Belarus</option>
              <option value="armenia" className={styles.selectCountryItem}>Armenia</option>
            </select>
            <div className={styles.item}>
              <span>Соглашаюсь на рассылку</span>
              <input type="checkbox" required/>
            </div>
            <Button children = "Продолжить"/>
          </div>
        </div>
    );
};