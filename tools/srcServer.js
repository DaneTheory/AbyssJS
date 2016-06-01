/*==============================================================================
                            DEVELOPMENT SERVER
                            ------------------
                          Dev Server Config File
                     *)Browser-Sync driven dev server.
                     *)Webpack utils run as middleware.
                     *)Supports hot module reloading (hmr).
==============================================================================*/
import browserSync  from 'browser-sync'
import historyApiFallback  from 'connect-history-api-fallback'
import webpack  from 'webpack'
import webpackDevMiddleware  from 'webpack-dev-middleware'
import webpackHotMiddleware  from 'webpack-hot-middleware'
import config  from '../webpack.config.dev'


const bundler = webpack(config);

// For more Broswer-Sync recipes, visit https://github.com/BrowserSync/recipes
browserSync({
  server: {
    baseDir: 'src',
    middleware: [
      webpackDevMiddleware(bundler, {
      // For more options, visit http://webpack.github.io/docs/webpack-dev-middleware.html
        publicPath: config.output.publicPath,
        stats: { colors: true },
        noInfo: true, // Display no info to console (only warnings and errors). Default is false.
        quiet: false, // Display nothing to the console. Default is false.
        lazy: false // Lazy Mode. This means no watching, but recompilation on every request. Default is false.
      }),
      webpackHotMiddleware(bundler),
      require('connect-logger')(),
      historyApiFallback()
    ]
  },
  files: [
    'src/*.html'
  ]
});
