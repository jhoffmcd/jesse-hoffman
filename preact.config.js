const CopyWebpackPlugin = require('copy-webpack-plugin')

export default (config, env, helpers) => {
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0]

  // Add emotion css plugin and options at front of babel loader plugins.
  rule.options.plugins.unshift(['emotion', { 'hoist': env.production, 'sourceMap': !env.production, 'autoLabel': !env.production }])

  // Add robots.txt to the workflow.
  config.plugins.push(
    new CopyWebpackPlugin([
      { from: 'robots.txt' }
    ])
  )

  // Add mdx support for markdown.
  config.module.loaders.push(
    { test: /\.mdx?$/,
      use: [
        'babel-loader',
        'mdx-loader'
      ]
    }
  )

  // Add resolve support for mdx extension.
  config.resolve.extensions.push('.mdx')
}
