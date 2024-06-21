import { type FC, type ReactNode, memo, useCallback, useMemo, useState } from 'react';

import { ThemeContext } from './ThemeContext';
import { Theme } from './types';

/**
 * Ключ для сохранения и загрузки ранее выбранной темы
 */
export const LOCAL_STORAGE_THEME_KEY = 'theme';

/**
 * Тема приложения по-умолчанию
 */
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

/**
 * Свойства ThemeProvider
 */
export interface ThemeProviderProps {
    /**
     * Дочерние элементы
     */
    children: ReactNode;
}

/**
 * Context-provider для переключения темы приложения
 */
export const ThemeProvider: FC<ThemeProviderProps> = memo<ThemeProviderProps>(
    function ThemeProvider ({ children }: ThemeProviderProps) {
        const [theme, setTheme] = useState<Theme>(defaultTheme);

        const onSetTheme = useCallback((theme: Theme) => {
            setTheme(theme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        }, []);

        const toggleTheme = useCallback(() => {
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            onSetTheme(newTheme);
        }, [onSetTheme, theme]);

        const context = useMemo(
            () => ({
                theme,
                setTheme: onSetTheme,
                toggleTheme
            }),
            [onSetTheme, theme, toggleTheme]
        );

        return (
            <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
        );
    }
);
