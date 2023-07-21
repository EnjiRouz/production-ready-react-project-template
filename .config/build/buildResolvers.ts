import { ResolveOptions, RuleSetRule } from 'webpack';

/**
 * Подготовка конфигурации resolvers для сборки приложения
 * @returns конфигурация resolvers для Webpack
 */
export function buildResolvers(): ResolveOptions {
    const typeScriptResolvers = ['.tsx', '.ts', '.js'];

    return {
        extensions: typeScriptResolvers,
    };
}
