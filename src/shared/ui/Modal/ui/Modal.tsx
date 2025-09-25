import styles from "./Modal.module.scss";
import cls from "classnames"
import {type ReactNode, useCallback, useEffect} from "react";
import {createPortal} from "react-dom";

interface ModalProps {
    children?: ReactNode;
    onClose?: () => void;
}

export const Modal = ({children, onClose}: ModalProps) => {

  const onClickEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    },
    [onClose]
  )
  useEffect(() => {
    window.addEventListener("keydown", onClickEsc);
    return () => {
      window.removeEventListener("keydown", onClickEsc);
    }
  }, [onClickEsc]);
    return createPortal(
        <div className={cls(styles.overlay)}>
          <div className={cls(styles.Modal)}>
            {children}
         </div>
       </div>,
      document.body
    )
};
