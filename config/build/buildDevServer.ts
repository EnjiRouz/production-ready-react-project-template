import { type Configuration } from 'webpack-dev-server';

import { type BuildOptions } from './types';

/**
 * Подготовка конфигурации для сборки dev-server
 * @param options опции сборки приложения
 * @returns конфигурация для сборки dev-server
 */
export function buildDevServer (options: BuildOptions): Configuration {
    const { port } = options;

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    };
}
