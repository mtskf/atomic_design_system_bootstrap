// @ts-check
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		ignores: ["**/node_modules/**", "**/dist/**", "**/storybook-static/**"]
	},
	{
		files: ["**/*.{ts,tsx}"]
		,
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2022,
			sourceType: "module"
		},
		plugins: {
			"@typescript-eslint": tseslint,
			react: reactPlugin,
			"react-hooks": reactHooks
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...reactPlugin.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
		}
	},
	prettier
];


