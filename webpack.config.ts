import path from 'path';

import { type Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnvironment, type BuildPaths } from './config/build/types/config';

/**
 * Определение путей
 */
const paths: BuildPaths = {
    entryPath: path.resolve(__dirname, 'src', 'index.tsx'),
    buildPath: path.resolve(__dirname, 'build'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
    srcPath: path.resolve(__dirname, 'src')
}

/**
 * Конфигурация Webpack
 */
export default (env: BuildEnvironment): Configuration => {
    const { mode, port } = env;

    const MODE = mode || 'development';
    const PORT = port || 3000;

    const config: Configuration = buildWebpackConfig({
        mode: MODE,
        paths,
        port: PORT
    });

    return config;
};
