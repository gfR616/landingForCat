module.exports = {
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es6: true,
	},
	extends: [
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:react/recommended',
		// "plugin:prettier/recommended"
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		ecmaFeatures: {
			js: true,
			jsx: true,
		},
		// project: ['./tsconfig.base.json'],
	},
	plugins: ['react', 'prettier', 'import'],
	rules: {
		'prettier/prettier': 'warn',
		'no-console': 'off',
		strict: ['error', 'global'],
		'no-dupe-class-members': 'error',
		'no-var': 'error',
		'no-unused-vars': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/no-unescaped-entities': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx', '.tsx', '.ts'],
			},
		],
		'array-callback-return': 'warn',
		'no-class-assign': 'error',
		'no-debugger': 'warn',
		'no-dupe-args': 'warn',
		'no-dupe-else-if': 'warn',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'warn',
		'no-import-assign': 'warn',
		'no-promise-executor-return': 'warn',
		'no-prototype-builtins': 'warn',
		'no-template-curly-in-string': 'error',
		'import/no-anonymous-default-export': 'off',
		'no-extra-boolean-cast': 'off',
		'react/no-unknown-property': [
			2,
			{
				ignore: ['jsx', 'global'],
			},
		],
		'react/display-name': 'warn',
		'react-hooks/exhaustive-deps': 'off',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-extra-semi': 'off',
	},
}
