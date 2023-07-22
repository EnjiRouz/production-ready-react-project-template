/**
 * Вариант сборки приложения: для разработки или для выкатки в production
 */
export type BuildMode = 'production' | 'development';

/**
 * Пути для сборки приложения
 */
export interface BuildPaths {
    /**
     * Точка входа в приложение (например, src/index.ts)
     */
    entryPath: string;
    
    /**
     * Путь для сохранения итоговой сборки
     */
    buildPath: string;

    /**
     * Путь к HTML-файлу (например, public/index.html)
     */
    htmlPath: string;

    /**
     * Путь к папке 'src'
     */
    srcPath: string;
}

/**
 * Опции для сборки приложения
 */
export interface BuildOptions {
    /**
     * Вариант сборки приложения
     */
    mode: BuildMode;

    /**
     * Пути для сборки приложения
     */
    paths: BuildPaths;

    /**
     * Порт для запуска приложения
     */
    port: number;
}

/**
 * Переменные окружения
 */
export interface BuildEnvironment {
    /**
     * Вариант сборки приложения
     */
    mode: BuildMode;

    /**
     * Порт для запуска приложения
     */
    port: number;
}