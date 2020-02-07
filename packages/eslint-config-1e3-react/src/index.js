const rules = require('./rules')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', '1e3'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules,
}
