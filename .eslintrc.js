import path from 'path'


module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: path.resolve(__dirname, 'tsconfig.json'),
    sourceType: 'module',
    tsconfigRootDir: __dirname, 
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 1,
    '@typescript-eslint/prefer-optional-chain': 1,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-var-requires': 1,
    'eol-last': 2,
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-trailing-spaces': 'error',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};
