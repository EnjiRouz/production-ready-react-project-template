import { LazyMainPage } from "../pages/MainPage";
import { LazyAboutPage } from "../pages/AboutPage";
import { PageData } from "./types"

/**
 * Страницы приложения
 */
export const PAGES: Record<string, PageData> = {
  // главная страница
  main: {
    path: '/',
    element: <LazyMainPage />
  },

  // страница "О проекте"
  about: {
    path: '/about',
    element: <LazyAboutPage />
  },
}
