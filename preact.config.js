export default (config, env, helpers) => {
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0]

  // Add emotion css plugin and options at front of babel loader plugins.
  rule.options.plugins.unshift(['emotion', { 'hoist': env.production, 'sourceMap': !env.production, 'autoLabel': !env.production }])
}
