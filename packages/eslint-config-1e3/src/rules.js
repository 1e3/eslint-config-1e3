const { OFF, WARN, ERROR } = require('./constants')

const rules = {
  'prettier/prettier': [
    'error',
    {
      arrowParens: 'avoid',
      printWidth: 100,
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
    },
  ],
}

module.exports = rules
