import { type RuleSetRule } from 'webpack';

/**
 * Загрузчик svg
 */
export const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: '@svgr/webpack'
};
