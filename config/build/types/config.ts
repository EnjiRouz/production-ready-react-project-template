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
 * Переменные окружения
 */
export interface BuildEnvironment {
    /**
     * Вариант сборки приложения
     * @default 'development'
     */
    mode: BuildMode;

    /**
     * Порт для запуска приложения
     * @default 3000
     */
    port: number;

    /**
     * Признак включения плагина для анализа размера bundle
     * (поскольку в env нельзя передать Boolean, то используется строковый тип)
     * @default 'false'
     */
    isAnalyzeBundleEnabled: 'true' | 'false';
}

/**
 * Опции для сборки приложения
 */
export type BuildOptions = BuildEnvironment & {
    /**
     * Пути для сборки приложения
     */
    paths: BuildPaths;
}
