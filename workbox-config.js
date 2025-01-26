module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{webp,png,svg,ico,html,mp3,json,mp4,woff2,css,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};