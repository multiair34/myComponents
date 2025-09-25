import styles from "./LoginModal.module.scss"
import cls from "classnames"
import {Modal} from "../../../../shared/ui/Modal";
import {Button} from "../../../../shared/ui/Button";
import {useAuthModals} from "../../lib/hooks/useAuthModals.ts"
import {Input} from "../../../../shared/ui/Input";

export const LoginModal = () => {
    const {toggleLoginModal, toggleSignUpModal, closeModalEsc} = useAuthModals();
    const onClose = () => {
      closeModalEsc()
    }

    return (
       <Modal onClose={onClose}>
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
             <Input type={"text"}/>
           </div>
           <div className={cls(styles.item)}>
             <span className={cls(styles.itemText)}>Пароль</span>
             <Input type={"password"}/>
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
             {/*Сделать компонент чекбокса или расширить Input */}
             <input type="checkbox"/>
           </div>
           <Button children="Войти"/>
         </form>
       </Modal>
    );
};
