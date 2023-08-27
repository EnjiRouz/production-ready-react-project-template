import { type RuleSetRule } from 'webpack';

/**
 * Загрузчик файлов (шрифты, изображения (кроме svg) и т.д.)
 */
export const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/,
    use: 'file-loader'
};
