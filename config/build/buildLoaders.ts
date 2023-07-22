import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

/**
 * Подготовка конфигурации правил для loaders для сборки приложения
 * @param options опции сборки приложения
 * @returns конфигурация правил для Webpack
 */
export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { mode } = options;
    const isDevModeEnabled = mode === 'development';
    
    const typeScriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // порядок loaders важен
    const cssLoader = {
        // регулярное выражение находит css, scss и sass-файлы
        test: /\.s?[ac]ss$/i,
        use: [
            isDevModeEnabled ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // регулярное выражение находит module.css, module.scss и module.sass-файлы
                        auto: /\.module\.s?[ac]ss$/,
                        localIdentName: isDevModeEnabled ? '[local]--[hash:base64:5]' : "[hash:base64:8]",
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [
        typeScriptLoader,
        cssLoader,
    ];
}
