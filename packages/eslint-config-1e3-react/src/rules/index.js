const { ERROR } = require('../constants')

const react = require('./react')

const rules = {
	'prettier/prettier': [
		ERROR,
		{
			arrowParens: 'avoid',
			printWidth: 100,
			semi: false,
			singleQuote: true,
			tabWidth: 1,
			trailingComma: 'all',
			useTabs: true,
		},
	],
}

module.exports = { ...rules, ...react }
