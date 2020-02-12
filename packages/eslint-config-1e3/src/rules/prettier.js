import { ERROR } from './constants'

export default {
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
