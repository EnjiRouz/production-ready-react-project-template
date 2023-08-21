import { ButtonHTMLAttributes, FC, memo } from "react";

import { getBemClasses } from "@/shared/lib/classNameUtils";

import { BaseProps } from "../types";
import classes from "./Button.module.scss";

type ButtonColor = "primary" | "secondary";

export type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Подпись к кнопки при наведении мыши
     */
    title: string;

    /**
     * Цветовая тема элемента
     * @default 'primary'
     */
    color?: ButtonColor;

    /**
     * Отключение кнопки
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Обработчик нажатия на кнопку
     */
    onClick?: () => void;
  };

export const Button: FC<ButtonProps> = memo<ButtonProps>(function Button({
  children,
  title,
  onClick,
  isDisabled,
  color = "primary",
  className,
  "data-testid": dataTestId = "Button",
  ...otherProps
}) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      title={title}
      className={getBemClasses(classes, "", { color }, [className])}
      data-testid={dataTestId}
      {...otherProps}
    >
      {children}
    </button>
  );
});
