import { type ResolveOptions } from 'webpack';
import { type BuildOptions } from './types/config';

/**
 * Подготовка конфигурации resolvers для сборки приложения
 * @param options опции сборки приложения
 * @returns конфигурация resolvers для Webpack
 */
export function buildResolvers (options: BuildOptions): ResolveOptions {
    const { paths } = options;
    const typeScriptResolvers = ['.tsx', '.ts', '.js'];

    return {
        extensions: typeScriptResolvers,
        preferAbsolute: true,
        modules: [paths.srcPath, 'node_modules'],
        mainFiles: ['index'],
        roots: [paths.srcPath],
        alias: {
            '@': paths.srcPath
        }
    };
}
