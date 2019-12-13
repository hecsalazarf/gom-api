module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    project: './tsconfig.eslint.json',
  },

  env: {
    node: true,
    es6: true
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'

  ],

  plugins: [
    '@typescript-eslint'
  ],

  rules: {
    'no-console': 'warn',
    'no-trailing-spaces': "error",
    'comma-spacing': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/brace-style': ['error'],
    '@typescript-eslint/semi': ['error']
  }
}
