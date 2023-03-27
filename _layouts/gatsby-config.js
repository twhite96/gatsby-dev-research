module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `tiff's notes`,
  },
  plugins: [
    `gatsby-remark-auto-headers-improved`,
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/inbox",
        parseWikiLinks: true,
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
