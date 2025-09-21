import styles from "./SignUpModal.module.scss"
import cls from "classnames"
import {Button} from "../../../../shared/ui/Button";
import {useAuthModals} from "../../lib/hooks/useAuthModals.ts"

export const SignUpModal = () => {
    const {toggleSignUpModal} = useAuthModals();
    return (
        <div className={cls(styles.wrapper)}>
          <div className={cls(styles.ModalRegistration)}>
            <div className={cls(styles.head)}>
              <h1 className={cls(styles.mainText)}>Регистрация</h1>
              <span
                onClick={toggleSignUpModal}
                className={cls(styles.ExitButton)}
              >
                ✖
              </span>
            </div>
            <div className={cls(styles.item)}>
              <span className={cls(styles.itemText)}>Ваше имя</span>
              <input type="text" className={cls(styles.itemInput)} required/>
            </div>
            <div className={cls(styles.item)}>
              <span className={cls(styles.itemText)}>Ваша почта</span>
              <input type="email" className={cls(styles.itemInput)}/>
            </div>
            <div className={cls(styles.item)}>
              <span className={cls(styles.itemText)}>Пароль</span>
              <input type="password" className={cls(styles.itemInput)} required/>
            </div>
            <div className={cls(styles.item)}>
              <span className={cls(styles.itemText)}>Подтвердить пароль</span>
              <input type="password" className={cls(styles.itemInput)} required/>
            </div>
            <span className={cls(styles.itemText)}>Страна проживания</span>
            <select  name="countryes" id="countryesSelect" className={cls(styles.selectCountry)}>
              <option value="russia" className={cls(styles.selectCountryItem)}>Russia</option>
              <option value="belarus" className={cls(styles.selectCountryItem)}>Belarus</option>
              <option value="armenia" className={cls(styles.selectCountryItem)}>Armenia</option>
            </select>
            <div className={cls(styles.item)}>
              <span>Соглашаюсь на рассылку</span>
              <input type="checkbox" required/>
            </div>
            <Button children = "Продолжить"/>
          </div>
        </div>
    );
};
