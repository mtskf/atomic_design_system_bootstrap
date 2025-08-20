/* eslint-env node */
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react", "react-hooks"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
	],
	settings: {
		react: { version: "detect" },
	},
	env: { browser: true, es2022: true, node: true },
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			rules: {
				"react/react-in-jsx-scope": "off",
				"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
			},
		},
		{
			files: ["**/*.stories.tsx", "**/*.stories.ts"],
			rules: { "import/no-anonymous-default-export": "off" },
		},
	],
};


