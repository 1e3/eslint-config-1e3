const { ERROR } = require('./constants')

const reactRules = require('./react')

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

module.exports = Object.assign({}, rules, reactRules)
