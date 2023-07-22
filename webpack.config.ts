import path from 'path';

import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnvironment, BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
    entryPath: path.resolve(__dirname, 'src', 'index.ts'),
    buildPath: path.resolve(__dirname, 'build'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
}

export default (env: BuildEnvironment) => {
    const { mode, port } = env;
    
    const MODE = mode || "development";
    const PORT = port || 3000;
    
    const config: Configuration = buildWebpackConfig({
        mode: MODE,
        paths,
        port: PORT,
    });

    return config;
};