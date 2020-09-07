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
    'keyword-spacing': 'error',
    'eol-last': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/brace-style': ['error'],
    '@typescript-eslint/semi': ['error'],
    // FOLLOWING RULES DISABLE RECOMMENDED BEST PRACTICES
    // ADDED AFTER UPGRADE TO v3
    // TODO: Study alternatives not to use them
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-template-expressions': ['error', {
      allowAny: true,
    }],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'warn',
  },
};
