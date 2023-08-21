import { createContext, useContext } from 'react';
import { type Theme } from './types';

/**
 * Свойства ThemeContext
 */
export interface ThemeContextProps {
    /**
     * Текущая тема приложения
     */
    theme?: Theme;

    /**
     * Обработчик для установки новой темы для приложения
     * @param theme тема, которую нужно установить
     * @returns установка новой темы для приложения
     */
    setTheme?: (theme: Theme) => void;

    /**
     * Обработчик для переключения темы
     */
    toggleTheme?: () => void;
}

/**
 * Контекст для переключения темы приложения
 */
export const ThemeContext = createContext<ThemeContextProps>({});

/**
 * Hook для получения контекста для переключения темы приложения
 */
export const useTheme = (): ThemeContextProps => useContext(ThemeContext);
