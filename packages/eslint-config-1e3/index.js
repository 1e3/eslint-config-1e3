const rules = require('./rules')

module.exports = {
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules,
}
