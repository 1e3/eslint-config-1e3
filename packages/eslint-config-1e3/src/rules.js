const { OFF, WARN, ERROR } = require('./constants')

const rules = {
  'arrow-parens': [ERROR, 'as-needed'],
  'arrow-body-style': [ERROR, 'as-needed'],
  'class-methods-use-this': OFF,
  'comma-dangle': [ERROR, 'always-multiline'],
  'eol-last': [ERROR, 'always'],
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
  'no-trailing-spaces': ERROR,
  'no-alert': ERROR,
  'no-console': ERROR,
  'no-confusing-arrow': OFF,
  'no-use-before-define': OFF,
  'prefer-template': ERROR,
  'prettier/prettier': [
    'error',
    {
      printWidth: 100,
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
    },
  ],
  'require-yield': OFF,
  semi: OFF,
  quotes: [
    WARN,
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
}

module.exports = rules
