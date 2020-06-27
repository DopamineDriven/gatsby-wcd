require("ts-node").register({ files: true });

module.exports = {
	siteMetadata: {
		siteName: `gatsby-wcd`,
		exampleUrl: `https://github.com/DopamineDriven/gatsby-wcd`
	},
	plugins: [
		// gatsby-plugin-typescript -> included in gatsby
		// can explicitly define to customize config options
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
				omitGoogleFont: true
			}
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true,
				jsxPragma: `React`,
				allExtensions: true
			}
		}
	]
};
