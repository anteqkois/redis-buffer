module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    camelcase: 'off',
    'prefer-const': 'off',
    'no-case-declarations': 'off',
    'no-loss-of-precision': 'off',
    'no-new': 'off',
    'no-async-promise-executor': 'off',
  },
}
