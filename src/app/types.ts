import { ReactNode } from "react";

/**
 * Данные о странице
 */
export interface PageData {
    /**
     * Путь для перехода на страницу
     */
    path: string;

    /**
     * React-компонент для отображения страницы
     */
    element: ReactNode;
}
