const rules = require('./rules')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', '1e3', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules,
}
