module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ['prettier'],
	extends: [
		'airbnb',
		'plugin:prettier/recommended',
		'plugin:vue/recommended',
		'vuetify',
		'prettier',
		'prettier/vue',
		'prettier/react',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': ['warn'],
		'linebreak-style': [2, 'windows'],
		'no-param-reassign': [
			2,
			{
				props: false,
			},
		],
		'import/no-unresolved': [
			'error',
			{
				ignore: ['./', '@/'],
			},
		],
		'vue/html-indent': 4,
		//
		// 'vue/html-closing-bracket-spacing': [
		// 	'error',
		// 	{
		// 		selfClosingTag: 'always',
		// 	},
		// ],
		'vue/max-attributes-per-line': [
			4,
			{
				singleline: 0,
				multiline: {
					max: 1,
					allowFirstLine: true,
				},
			},
		],
		'import/prefer-default-export': 'off',
		'vue/component-name-in-template-casing': 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
