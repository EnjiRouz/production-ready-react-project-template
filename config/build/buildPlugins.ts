import {
    ProgressPlugin,
    type WebpackPluginInstance,
    DefinePlugin,
    HotModuleReplacementPlugin
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { type BuildOptions } from './types';

/**
 * Подготовка конфигурации плагинов для сборки приложения
 * @param options опции сборки приложения
 * @returns конфигурация плагинов для Webpack
 */
export function buildPlugins (options: BuildOptions): WebpackPluginInstance[] {
    const { paths, mode, isAnalyzeBundleEnabled } = options;
    const { htmlPath } = paths;

    return [
        new HTMLWebpackPlugin({
            template: htmlPath
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            BUILD_MODE: JSON.stringify(mode)
        }),
        new HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: isAnalyzeBundleEnabled === 'true'
        })
    ];
}
