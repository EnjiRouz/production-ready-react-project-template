import { ReactNode } from "react";
import { LazyAboutPage } from "@/pages/AboutPage";
import { LazyMainPage } from "@/pages/MainPage";

/**
 * Перечисление доступных страниц приложения
 */
export enum Routes {
  MAIN = "main",
  ABOUT = "about",
}

/**
 * Пути к страницам приложения
 */
export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: "/",
  [Routes.ABOUT]: "/about",
};

/**
 * Данные о странице
 */
export interface RouteData {
  /**
   * Название страницы
   */
  name: string;

  /**
   * Путь для перехода на страницу
   */
  path: string;

  /**
   * React-компонент для отображения страницы
   */
  element: ReactNode;
}

/**
 * Страницы приложения
 */
export const routeConfig: Record<Routes, RouteData> = {
  // главная страница
  [Routes.MAIN]: {
    name: "Главная",
    path: RoutePath.main,
    element: <LazyMainPage />,
  },

  // страница "О проекте"
  [Routes.ABOUT]: {
    name: "О проекте",
    path: RoutePath.about,
    element: <LazyAboutPage />,
  },
};
