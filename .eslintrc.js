module.exports = {
	parser: `@typescript-eslint/parser`,
	extends: [
		"eslint:recommended",
		"plugin:react-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier/@typescript-eslint"
	],
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	rules: {
		"react/prop-types": "off",
		quotes: "off",
		"@typescript-eslint/quotes": [
			2,
			"backtick",
			{
				avoidEscape: true
			}
		],
		indent: "off"
	},
	settings: {
		react: {
			version: "detect"
		}
	}
};
