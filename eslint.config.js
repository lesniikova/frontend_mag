// eslint.config.js
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    createDefaultProgram: true,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc',
    'prettier',
    '@angular-eslint',
  ],
  overrides: [
    {
      files: ['*.html'],
      rules: {
        '@angular-eslint/template/no-negated-async': 'error', // example rule for HTML
      },
    },
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn', // example rule for test files
      },
    },
  ],
  rules: {
    'prettier/prettier': ['error'],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase',
      },
    ],
  },
};
