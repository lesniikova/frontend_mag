module.exports = {
    preset: 'jest-preset-angular',
    transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
    },
};
