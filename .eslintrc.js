module.exports = {
	parser: `@typescript-eslint/parser`,
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier/typescript-eslint"
	],
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module"
	},
	env: {
		browser: true,
		node: true
	},
	rules: {
		quotes: "off",
		"@typescript-eslint/quotes": [
			2,
			"backtick",
			{
				avoidEscape: true
			}
		],
		indent: "off"
	}
};
