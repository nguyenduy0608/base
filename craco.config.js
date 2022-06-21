const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.path.json');

module.exports = {
    webpack: {
        alias: {
            '~': path.resolve(__dirname, './src'),
            '~features': path.resolve(__dirname, './src/features'),
        },
    },
    jest: {
        configure: {
            preset: 'ts-jest',
            moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
                prefix: '<rootDir>/src/',
            }),
        },
    },
};