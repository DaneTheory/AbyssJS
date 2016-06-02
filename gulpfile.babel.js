import browserSync  from 'browser-sync'
import chalk  from 'chalk'
import historyApiFallback  from 'connect-history-api-fallback'
import gulp  from 'gulp'
import autoprefixer  from 'gulp-autoprefixer'
import cache  from 'gulp-cache'
import changed  from 'gulp-changed'
import cssnano  from 'gulp-cssnano'
import imagemin  from 'gulp-imagemin'
import notify  from 'gulp-notify'
import plumber  from 'gulp-plumber'
import rename  from 'gulp-rename'
import sass  from 'gulp-sass'
import sourcemaps  from 'gulp-sourcemaps'
import gutil  from 'gulp-util'
import notifier  from 'node-notifier'
import webpack  from 'webpack'
import webpackDevMiddleware  from 'webpack-dev-middleware'
import webpackHotMiddleware  from 'webpack-hot-middleware'
import config  from './webpack.config.dev'

// Instantiate Required Methods
browserSync.create();

// Define Required Variables
const bundler = webpack(config),
      appPort = 8001,
      uiPort = 3000,
      weinrePort = 3001,
      WP_INDEX_FILE = 'src/*.html',
      WP_STYLESHEETS_MAIN_FILE = './src/stylesheets/*.scss',
      WP_STYLESHEETS_ADDTIONAL_FILES = './src/stylesheets/*/*.scss',
      stylesSrc = './src/stylesheets/styles.scss',
      stylesDest = './src/public/styles',
      mainStyleSheet = './src/stylesheets/*/*.scss',
      tertiaryStyleSheets = './src/stylesheets/*/*.scss',
      mainHTML = './src/*.html',
      imagesSrc = './src/public/images/**/*.+(png|jpg|gif|svg)',
      imagesDest = './src/public/images',
      fontsSrc = './src/public/fonts/**/*',
      fontsDest = './src/public/fonts';

// Error Function For Plumber
const onError = function (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};

/*====================================================================================================================================
    GULP TASKS
----------------
    **Task Names:
      1) bs
          Browser Sync for auto page reload on file change. This includes HTML, CSS as well as JS.
          Hot Module Reloading enabled for Webpack Middleware.
      2) styles
          Enables SASS/SCSS compilation into CSS file served via index.html. Auto reloads on change via Browser Sync.
          All CSS is autoprefixed and minified on change.
      3) bs-reload
          Default reload trigger for Browser Sync.
      4) images
         Optimizes images.
      5) fonts
         Copies Dev fonts to Prod folder.
      6) default
          Default Gulp Task Runs:
            ['styles','bs']
          Default Gulp Task Watches:
            *)All files in stylesheets folder for changes, then runs ['styles'] if changes occur.
            *)All .html files located within root directory (./src) for changes, then runs ['bs-reload'] if changes occur.
=====================================================================================================================================*/


// TASK: bs
// Browser Sync with Webpack as middleware. Hot Module Reloading enabled.
gulp.task('bs', function(){
  browserSync.init({
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
        historyApiFallback(),
        require('connect-logger')()
      ]
    },
    notify: {
      styles: {
          top: 'auto',
          bottom: '0',
          padding: '1em',
          position: 'fixed',
          fontSize: '1.25em',
          fontFamily: 'monospace',
          zIndex: '9999999',
          borderRadius: '1em 0em 0em 0em',
          color: 'rgba(244, 244, 244, 1)',
          textAlign: 'center',
          display: 'block',
          backgroundColor: 'rgba(87, 247, 93, 0.8)',
          textShadow: '1px 1px 1px rgba(241, 99, 52, 0.9)'
      }
    },
    ui: {
        port: uiPort,
        weinre: {
            port: weinrePort
        }
    },
    port: appPort,
    ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
    },
    logPrefix: 'Abyss',
    logLevel: 'info', // Options: trace, debug, warn, info, error, silent. Order is from most verbose output to least.
    logConnections: true,
    logFileChanges: true,
    online: true,
    reloadOnRestart: true,
    scrollProportionally: true,
    injectChanges: true,
    files: [
      WP_INDEX_FILE,
      WP_STYLESHEETS_MAIN_FILE,
      WP_STYLESHEETS_ADDTIONAL_FILES
    ]
  })
  notifier.notify({
    'title': 'STATUS: READY!',
    'message': 'Browser Connected To Browser-Sync'
  })
});


// TASK: styles
// Live Reloads CSS on file Change. Compiles SASS/SCSS To CSS with Sourcemapping in Dev Mode.
gulp.task('styles', function () {
    return gulp.src(stylesSrc)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init({ debug: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(stylesDest))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(stylesDest))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'STYLES TASK COMPLETE' }))
});


// TASK: bs-reload
// Default reload method for Browser Sync.
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// TASK: images
// Optimizes images including  PNG, JPG, SVG, and GIF. Also keeps track of optimized images. Only runs on unoptimized images.
gulp.task('images', function(){
  return gulp.src(imagesSrc)
  .pipe(plumber({ errorHandler: onError }))
  .pipe(changed(imagesDest))
  .pipe(cache(imagemin({
    progressive: true,
    interlaced: true,
    svgoPlugins: [ {removeViewBox:false}, {removeUselessStrokeAndFill:false} ]
  })))
  .pipe(rename({ suffix: '-opti' }))
  .pipe(gulp.dest(imagesDest))
  .pipe(notify({ message: 'IMAGES TASK COMPLETE' }))
});


// TASK: fonts
// Copies Dev font files to Prod folder structure.
gulp.task('fonts', function() {
  return gulp.src(fontsSrc)
  .pipe(plumber({ errorHandler: onError }))
  .pipe(gulp.dest(fontsDest))
  .pipe(notify({ message: 'FONTS TASK COMPLETE' }))
})



// CUSTOM CONSOLE MESSAGE ON BUILD
// TODO: Make This Easier TO Scale. As Of Now, It Exists As POC.
const chalkSuccess = chalk.white.bold.bgBlue,
      chalkInfo = chalk.white.bold.bgBlue,
      chalkMainMsgStr = chalk.white.bold.underline,
      chalkEndMsgStr = chalk.grey,
      chalkAccessMsgStr = chalk.yellow,
      chalkDev = chalk.cyan.bold,
      chalkLine = chalk.magenta.bold;
const mainMsgOutputStr = chalkMainMsgStr('RUNNING IN'),
      devMode = chalkDev('DEV'),
      mainMsgOutput = mainMsgOutputStr + ': ' + devMode,
      accessMsgOutputStrOne = chalkAccessMsgStr('URL For Local Viewing:'),
      localURL = chalkDev('http://localhost:'+appPort),
      accessMsgOutputOne = accessMsgOutputStrOne + ' ' + localURL,
      accessMsgOutputStrTwo = chalkAccessMsgStr('URL For Viewing Browser Sync UI:'),
      externalURL = chalkDev('http://localhost:'+uiPort),
      accessMsgOutputTwo = accessMsgOutputStrTwo + ' ' + externalURL,
      endMsgOutput = chalkEndMsgStr('For More Dev Features, update Browser-Sync\'s "logLevel" option');



// TASK default
// Default Gulp Task. Depends on 'styles' task and 'bs' task to run first.
gulp.task('default', ['styles','bs'], function () {
     console.log(chalkLine('------------------------------------------------------------------------------'))
  console.log(chalkSuccess('                                                                              '))
  console.log(chalkSuccess('                          '+mainMsgOutput+'                                     '))
     console.log(chalkInfo('             '+accessMsgOutputOne+'                     '))
  console.log(chalkSuccess('             '+accessMsgOutputTwo+'           '))
  console.log(chalkSuccess('                                                                              '))
  console.log(chalkSuccess('         '+endMsgOutput+'       '))
     console.log(chalkLine('------------------------------------------------------------------------------'))
  gulp.watch(tertiaryStyleSheets, ['styles']);
  gulp.watch(mainStyleSheet, ['styles']);
  gulp.watch(mainHTML, ['bs']);
});
