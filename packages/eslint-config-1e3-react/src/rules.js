const importRules = require('./import')
const reactRules = require('./react')
const jsxRules = require('./jsx')
const { OFF, WARN, ERROR } = require('./constants')

const rules = {
  'arrow-parens': [ERROR, 'as-needed'],
  'arrow-body-style': [ERROR, 'as-needed'],
  'comma-dangle': [ERROR, 'always-multiline'],
  indent: [
    ERROR,
    ERROR,
    {
      SwitchCase: WARN,
    },
  ],
  'max-len': [
    ERROR,
    100,
    ERROR,
    {
      ignoreUrls: true,
    },
  ],
  'newline-per-chained-call': OFF,
  'no-confusing-arrow': OFF,
  'no-console': ERROR,
  'no-alert': ERROR,
  'no-use-before-define': OFF,
  'prefer-template': ERROR,
  'class-methods-use-this': OFF,
  'require-yield': OFF,
  'prettier/prettier': [
    ERROR,
    {
      arrowParens: 'avoid',
      printWidth: 100,
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
    },
  ],
}

const concatenatedRules = Object.assign(
  {},
  rules,
  importRules,
  reactRules,
  jsxRules,
)

module.exports = concatenatedRules
