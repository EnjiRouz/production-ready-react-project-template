import { RuleSetRule } from 'webpack';

/**
 * Подготовка конфигурации правил для loaders для сборки приложения
 * @returns конфигурация правил для Webpack
 */
export function buildLoaders(): RuleSetRule[] {
    const typeScriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typeScriptLoader,
    ];
}
