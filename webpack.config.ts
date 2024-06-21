import path from 'path';

import { type Configuration } from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnvironment, type BuildPaths } from './config/build/types/config';

/**
 * Определение путей
 */
const paths: BuildPaths = {
    entryPath: path.resolve(__dirname, 'src', 'index.tsx'),
    buildPath: path.resolve(__dirname, 'build/app'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
    srcPath: path.resolve(__dirname, 'src')
}

/**
 * Конфигурация Webpack
 */
export default (env: BuildEnvironment): Configuration => {
    const { mode = 'development', port = 3000, isAnalyzeBundleEnabled = 'false' } = env;

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        port,
        isAnalyzeBundleEnabled
    });

    return config;
};
