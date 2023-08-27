import { type Configuration } from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { type BuildOptions } from './types';

/**
 * Подготовка конфигурации для сборки приложения с помощью Webpack
 * @param options опции сборки приложения
 * @returns конфигурация сборки для Webpack
 */
export function buildWebpackConfig (options: BuildOptions): Configuration {
    const { mode, paths } = options;
    const { entryPath, buildPath } = paths;

    const isDevModeEnabled = mode === 'development';

    return {
        mode,
        entry: entryPath,
        output: {
            filename: '[name].[contenthash].js',
            path: buildPath,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDevModeEnabled ? 'inline-source-map' : undefined,
        devServer: isDevModeEnabled ? buildDevServer(options) : undefined
    }
}
