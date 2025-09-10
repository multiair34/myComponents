import styles from "./Button.module.scss"
import type {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  )
}