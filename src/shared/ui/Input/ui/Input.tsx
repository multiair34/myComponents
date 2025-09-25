import styles from "./Input.module.scss"
import cls from "classnames"
import type {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
}

export const Input = ({type, name, placeholder, required, ...props}: InputProps) => {
    return (
        <input
          className={cls(styles.Input)}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          {...props}
        />
    );
};
