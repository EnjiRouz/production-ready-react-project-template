/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,

    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],

    moduleDirectories: [
        'node_modules'
    ],

    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],

    moduleNameMapper: {
        // настройка путей, как в конфигурации tsconfig.json "@/*": ["./src/*"]
        '@/(.*)': '<rootDir>/src/$1',

        // CSS Modules Mock  с помощью пакета identity-obj-proxy
        '\\.s?css$': 'identity-obj-proxy',

        // настройка заглушки для SVG
        '\\.svg$': path.resolve(__dirname, './config/jest/jestStub.tsx')
    },

    testEnvironment: 'jsdom',

    testMatch: [
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],

    setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts']
};

export default config;
