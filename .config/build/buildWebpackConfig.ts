import path from "path";
import { Configuration } from "webpack";

import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

/**
 * Подготовка конфигурации для сборки приложения с помощью Webpack
 * @param options опции сборки приложения
 * @returns конфигурация сборки для Webpack
 */
export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths } = options;
    const { entryPath, buildPath } = paths;

    return {
        mode: mode,
        entry: entryPath,
        output: {
            filename: '[name].[contenthash].js',
            path: buildPath,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}