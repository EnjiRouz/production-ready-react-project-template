import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { type BuildMode } from '../types/config';

/**
 * Загрузчик для css-файлов
 * @param mode вариант сборки приложения
 * @returns конфигурация загрузки css
 */
export const cssLoader = (mode: BuildMode): RuleSetRule => {
    const isDevModeEnabled = mode === 'development';

    return {
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
                        localIdentName: isDevModeEnabled
                            ? '[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    }
};
