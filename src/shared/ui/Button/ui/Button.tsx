import styles from "./Button.module.scss"
import cls from "classnames"
import type {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button className={cls(styles.Button)} {...props}>
      {children}
    </button>
  )
}
