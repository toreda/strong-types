module.exports = {
	presets: [
		[
			'@babel/env',
			{
				targets: {
					/** Node v14 is the latest version supported in AWS Lambda.*/
					node: '14.1.1'
				},
				useBuiltIns: 'usage',
				corejs: {
					version: '^3.18.0',
					shippedProposals: false
				}
			}
		],
		'@babel/preset-typescript'
	],
	sourceType: 'unambiguous',
	plugins: [
		'const-enum',
		'@babel/transform-runtime',
		'@babel/transform-typescript',
		'@babel/plugin-syntax-bigint'
	],
	ignore: ['core-js/']
};
