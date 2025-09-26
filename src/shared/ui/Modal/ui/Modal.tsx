import styles from "./Modal.module.scss";
import cls from "classnames"
import {type ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";

interface ModalProps {
    children?: ReactNode;
    onClose?: () => void;
}

export const Modal = ({children, onClose}: ModalProps) => {
  const rootDom: HTMLElement | null = document.getElementById("root");

  useEffect(() => {
    const onClickEsc = (event: KeyboardEvent) => {
      if(event.key === "Escape") {
        onClose?.()
      }
    }
    window.addEventListener("keydown", onClickEsc);
    return () => {
      window.removeEventListener("keydown", onClickEsc);
    }
  }, []);

  return createPortal(
        <div className={cls(styles.overlay)}>
          <div className={cls(styles.Modal)}>
            {children}
         </div>
       </div>,
      rootDom
    )
};
