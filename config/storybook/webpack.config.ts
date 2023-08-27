import path from 'path';
import { type RuleSetRule, type Configuration } from 'webpack';

import { cssLoader, svgLoader } from '../../config/build/loaders';
import { type BuildPaths } from '../../config/build/types';

/**
 * Определение путей
 */
const paths: BuildPaths = {
    entryPath: '',
    buildPath: '',
    htmlPath: '',
    srcPath: path.resolve(__dirname, '../../src')
}

/**
 * Конфигурация Webpack для Storybook
 */
export default ({ config }: { config: Configuration }): Configuration => {
    const mode = 'development';

    config.resolve.modules.push(paths.srcPath);
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': paths.srcPath
    };

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes -- необходимо использовать регулярное выражение
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(svgLoader);
    config.module.rules.push(cssLoader(mode));
    return config;
};
