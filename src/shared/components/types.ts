import { ReactNode } from "react";

export interface TestProps {
  /**
   * Аттрибут data-testid для элемента
   */
  "data-testid"?: string;
}

export interface BaseProps extends TestProps {
  /**
   * Дочерние элементы
   */
  children?: ReactNode;

  /**
   * Названия дополнительных классов для элемента
   */
  className?: string;
}
