const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const generateSourceMap = process.env.OMIT_SOURCEMAP === "true" ? false : true;
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const paths = require("./paths");
const postcssNormalize = require("postcss-normalize");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// common function to get style loaders
const getStyleLoaders = (cssOptions, includeSassPreprocessor, enableHotReload) => {
  const loaders = [
    enableHotReload && require.resolve("css-hot-loader"),
    // isEnvDevelopment && require.resolve("style-loader"), TODO: Figure out whether to add this later
    MiniCssExtractPlugin.loader,
    {
      loader: require.resolve("css-loader"),
      options: cssOptions
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve("postcss-loader"),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: "postcss",
        plugins: () => [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009"
            },
            stage: 3
          }),
          // Adds PostCSS Normalize as the reset css with default options,
          // so that it honors browserslist config in package.json
          // which in turn let's users customize the target behavior as per their needs.
          postcssNormalize()
        ],
        sourceMap: generateSourceMap
      }
    },
    includeSassPreprocessor && {
      loader: require.resolve("sass-loader"),
      options: {
        // includePaths: [require("path").resolve(__dirname, "node_modules")],
        sourceMap: generateSourceMap,
        data: `@import "src/shared/styles/variables.scss";
                 @import "src/shared/styles/global-style.scss";`
      }
    }
  ].filter(Boolean);
  // if (includeSassPreprocessor) {
  //   loaders.push({
  //     loader: require.resolve(preProcessor),
  //     options: {
  //       sourceMap: generateSourceMap
  //     }
  //   });
  // }
  return loaders;
};

const babelLoader = {
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: paths.appSrc,
  loader: require.resolve("babel-loader"),
  options: {
    customize: require.resolve("babel-preset-react-app/webpack-overrides"),
    plugins: [
      [
        require.resolve("babel-plugin-named-asset-import"),
        {
          loaderMap: {
            svg: {
              ReactComponent: "@svgr/webpack?-prettier,-svgo![path]"
            }
          }
        }
      ]
    ],
    cacheDirectory: true,
    cacheCompression: process.env.NODE_ENV === "production",
    compact: process.env.NODE_ENV === "production"
  }
};

// CSS
const cssModuleLoaderClient = {
  test: cssModuleRegex,
  use: getStyleLoaders(
    {
      modules: true,
      importLoaders: 1,
      sourceMap: generateSourceMap,
      // localIdentName: '[name]__[local]--[hash:base64:5]',
      getLocalIdent: getCSSModuleLocalIdent
    },
    false,
    true
  )
};

const cssLoaderClient = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 1,
      sourceMap: generateSourceMap
    },
    false,
    true
  )
};

const cssModuleLoaderServer = {
  test: cssModuleRegex,
  use: getStyleLoaders({
    exportOnlyLocals: true,
    importLoaders: 1,
    modules: true,
    getLocalIdent: getCSSModuleLocalIdent
  })
};

const cssLoaderServer = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: generateSourceMap
  })
};

// scss
const scssModuleLoaderClient = {
  test: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: generateSourceMap,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent
    },
    true,
    true
  )
};

const scssLoaderClient = {
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: generateSourceMap
    },
    true,
    true
  )
};

const scssModuleLoaderServer = {
  test: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: generateSourceMap,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent
    },
    true
  )
};

const scssLoaderServer = {
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: generateSourceMap
    },
    true
  )
};

const urlLoaderClient = {
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: require.resolve("url-loader"),
  options: {
    limit: 2048,
    name: "assets/[name].[hash:8].[ext]"
  }
};

const urlLoaderServer = {
  ...urlLoaderClient,
  options: {
    ...urlLoaderClient.options,
    emitFile: false
  }
};

const fileLoaderClient = {
  exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
  use: [
    {
      loader: require.resolve("file-loader"),
      options: {
        name: "assets/[name].[hash:8].[ext]"
      }
    }
  ]
};

const favIconLoader = {
  include: [/\.(ico)$/],
  use: [
    {
      loader: require.resolve("file-loader"),
      options: {
        name: "[name].[ext]"
      }
    }
  ]
};

const fileLoaderServer = {
  exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
  use: [
    {
      loader: require.resolve("file-loader"),
      options: {
        name: "assets/[name].[hash:8].[ext]",
        emitFile: false
      }
    }
  ]
};

const client = [
  {
    oneOf: [
      babelLoader,
      cssModuleLoaderClient,
      cssLoaderClient,
      scssLoaderClient,
      scssModuleLoaderClient,
      urlLoaderClient,
      fileLoaderClient,
      favIconLoader
    ]
  }
];
const server = [
  {
    oneOf: [
      babelLoader,
      cssModuleLoaderServer,
      cssLoaderServer,
      scssLoaderServer,
      scssModuleLoaderServer,
      urlLoaderServer,
      fileLoaderServer
    ]
  }
];

module.exports = {
  client,
  server
};
