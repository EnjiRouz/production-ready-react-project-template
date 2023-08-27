import { type RuleSetRule } from 'webpack';

import { babelLoader, cssLoader, fileLoader, svgLoader, typeScriptLoader } from './loaders';
import { type BuildOptions } from './types';

/**
 * Подготовка конфигурации правил для loaders для сборки приложения
 * @param options опции сборки приложения
 * @returns конфигурация правил для Webpack
 */
export function buildLoaders (options: BuildOptions): RuleSetRule[] {
    const { mode } = options;

    // порядок loaders важен
    return [babelLoader, typeScriptLoader, cssLoader(mode), svgLoader, fileLoader];
}
