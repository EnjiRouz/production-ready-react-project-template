/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

import type { Config } from 'jest';

const config: Config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules'
    ],

    // An array of file extensions your modules use
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

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // The glob patterns Jest uses to detect test files
    testMatch: [
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],

    setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts']
};

export default config;
