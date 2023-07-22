import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';

import { BuildOptions } from './types/config';

/**
 * Подготовка конфигурации плагинов для сборки приложения
 * @param options опции сборки приложения
 * @returns конфигурация плагинов для Webpack
 */
export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const { paths } = options;
    const { htmlPath } = paths;

    return [
        new HTMLWebpackPlugin({
            template: htmlPath,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
    ];
}
