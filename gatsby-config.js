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
		}
	]
};
