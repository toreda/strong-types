module.exports = {
	presets: [
		[
			'@babel/env',
			{
				targets: {
					/** Node v14 is the latest version supported in AWS Lambda.*/
					node: '14'
				},
				useBuiltIns: 'usage',
				corejs: {
					version: 3,
					shippedProposals: true
				}
			}
		],
		'@babel/preset-typescript'
	],
	sourceType: 'unambiguous',
	plugins: ['const-enum', '@babel/transform-typescript', '@babel/plugin-syntax-bigint'],
	ignore: ['core-js/']
};
