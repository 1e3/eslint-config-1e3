const rules = require('./rules/index')

module.exports = {
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
	extends: ['airbnb', '1e3', 'prettier', 'prettier/react'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
	rules,
}
