import styles from "./SignUpModal.module.scss"
import cls from "classnames"
import {Button} from "../../../../shared/ui/Button";
import {useAuthModals} from "../../lib/hooks/useAuthModals.ts"
import {Input} from "../../../../shared/ui/Input";
import {Modal} from "../../../../shared/ui/Modal";

export const SignUpModal = () => {
    const {toggleSignUpModal, closeModalEsc} = useAuthModals();
    const onClose = () => {
      closeModalEsc()
    }

    return (
        <Modal onClose={onClose}>
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
              <Input type={"text"} />
            </div>
            <div className={cls(styles.item)}>
              <span className={cls(styles.itemText)}>Ваша почта</span>
              <Input type={"email"} />
            </div>
            <div className={cls(styles.item)}>
              <span className={cls(styles.itemText)}>Пароль</span>
              <Input type={"password"} />
            </div>
            <div className={cls(styles.item)}>
              <span className={cls(styles.itemText)}>Подтвердить пароль</span>
              <Input type={"password"} />
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
        </Modal>
    );
};
