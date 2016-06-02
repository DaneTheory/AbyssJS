// import browserSync  from 'browser-sync'
// import historyApiFallback  from 'connect-history-api-fallback'
// import gulp  from 'gulp'
// import webpack  from 'webpack'
// import webpackDevMiddleware  from 'webpack-dev-middleware'
// import webpackHotMiddleware  from 'webpack-hot-middleware'
// import config  from '../../webpack.config.dev'
//
//
// const bundler = webpack(config);
//
// gulp.task('browserSync', function() {
//   browserSync.init({
//     notify: {
//       styles: {
//           top: 'auto',
//           bottom: '0',
//           padding: '1em',
//           position: 'fixed',
//           fontSize: '1.25em',
//           fontFamily: 'monospace',
//           zIndex: '9999999',
//           borderRadius: '1em 0em 0em 0em',
//           color: 'rgba(244, 244, 244, 1)',
//           textAlign: 'center',
//           display: 'block',
//           backgroundColor: 'rgba(87, 247, 93, 0.8)',
//           textShadow: '1px 1px 1px rgba(241, 99, 52, 0.9)'
//       }
//     },
//     ui: {
//         port: 3080,
//         weinre: {
//             port: 3081
//         }
//     },
//     port: 8001,
//     ghostMode: {
//         clicks: true,
//         forms: true,
//         scroll: true
//     },
//     logPrefix: 'Abyss',
//     logLevel: 'debug',
//     logConnections: true,
//     logFileChanges: true,
//     online: true,
//     reloadOnRestart: true,
//     scrollProportionally: true,
//     injectChanges: true,
//     server: {
//       baseDir: 'src',
//       middleware: [
//         webpackDevMiddleware(bundler, {
//         // For more options, visit http://webpack.github.io/docs/webpack-dev-middleware.html
//           publicPath: config.output.publicPath,
//           stats: { colors: true },
//           noInfo: true, // Display no info to console (only warnings and errors). Default is false.
//           quiet: false, // Display nothing to the console. Default is false.
//           lazy: false // Lazy Mode. This means no watching, but recompilation on every request. Default is false.
//         }),
//         webpackHotMiddleware(bundler),
//         require('connect-logger')(),
//         historyApiFallback()
//       ]
//     },
//     files: [
//       'src/*.html'
//     ]
//   })
// });
