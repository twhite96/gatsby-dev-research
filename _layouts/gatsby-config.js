module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `@tiff's working notes`,
    author: `tiff`,
    description: `a collection of working notes on software engineering`
  },
  plugins: [
    `gatsby-remark-auto-headers-improved`,
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `tiffnotes.dev`,
      },
    },
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
