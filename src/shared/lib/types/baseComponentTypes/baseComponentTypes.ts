import { ReactNode } from "react";
import { TestProps } from "../testTypes";

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