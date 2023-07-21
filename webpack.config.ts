import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';
import path from 'path';

const paths: BuildPaths = {
    entryPath: path.resolve(__dirname, 'src', 'index.ts'),
    buildPath: path.resolve(__dirname, 'build'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
}

const config: Configuration = buildWebpackConfig({
    mode: "development",
    paths,
});

export default config;