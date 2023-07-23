import { BaseProps } from "../components";

type IconColor = "primary" | "secondary";
type IconSize = "16" | "24" | "32";

export interface IconProps extends Omit<BaseProps, "children"> {
  /**
   * Цвет иконки
   * @default 'primary'
   */
  color?: IconColor;

  /**
   * Размер иконки
   * @default '16'
   */
  size?: IconSize;
}
