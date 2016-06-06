import browserSync  from 'browser-sync'
// import chalk  from 'chalk'
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
// import logSymbols  from 'log-symbols'
import notifier  from 'node-notifier'
import webpack  from 'webpack'
import webpackDevMiddleware  from 'webpack-dev-middleware'
import webpackHotMiddleware  from 'webpack-hot-middleware'
import config  from './webpack.config.dev'
import { ConsoleConfigs } from './tools/console/ConsoleConfigs'
import { AbyssInfo } from './tools/console/AbyssInfo'
import DotEnv from 'dotenv'
import nodemon from 'gulp-nodemon'
import PrettyError from 'pretty-error'
import GetPort from 'get-port'
import Ipify from 'ipify'
import InternalIp from 'internal-ip'
// import spawn from 'child_process'
import nodeInspector from 'gulp-node-inspector'
const spawn = require('child_process').spawn

DotEnv.config({path: './.env-config'})
AbyssInfo()
ConsoleConfigs()
// const childProc = spawn
const pe = PrettyError.start()

pe.appendStyle({
   // this is a simple selector to the element that says 'Error'
   'pretty-error > header > title > kind': {
      // which we can hide:
      display: 'none'
   },

   // the 'colon' after 'Error':
   'pretty-error > header > colon': {
      // we hide that too:
      display: 'none'
   },

   // our error message
   'pretty-error > header > message': {
      // let's change its color:
      color: 'bright-white',

      // we can use black, red, green, yellow, blue, magenta, cyan, white,
      // grey, bright-red, bright-green, bright-yellow, bright-blue,
      // bright-magenta, bright-cyan, and bright-white

      // we can also change the background color:
      background: 'cyan',

      // it understands paddings too!
      padding: '0 1' // top/bottom left/right
   },

   // each trace item ...
   'pretty-error > trace > item': {
      // ... can have a margin ...
      marginLeft: 2,

      // ... and a bullet character!
      bullet: '"<grey>o</grey>"'

      // Notes on bullets:
      //
      // The string inside the quotation mark gets used as the character
      // to show for the bullet point.
      //
      // You can set its color/background color using tags.
      //
      // This example sets the background color to white, and the text color
      // to cyan, the character will be a hyphen with a space character
      // on each side:
      // example: '"<bg-white><cyan> - </cyan></bg-white>"'
      //
      // Note that we should use a margin of 3, since the bullet will be
      // 3 characters long.
   },

   'pretty-error > trace > item > header > pointer > file': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > pointer > colon': {
      color: 'cyan'
   },

   'pretty-error > trace > item > header > pointer > line': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > what': {
      color: 'bright-white'
   },

   'pretty-error > trace > item > footer > addr': {
      display: 'none'
   }
})


GetPort().then(port => {
    console.log(port);
})

Ipify((err, ip) => {
    console.log(ip);
})

console.log(`IPV6 ${InternalIp.v4()}`)

console.log(`IPV6 ${InternalIp.v6()}`)

// const monitor = nodemon(options);
// process.once('SIGINT' ,() => {
//   monitor.once('exit' ,() => {
//     process.exit()
//   })
// })

// process.once('SIGUSR2', function () {
//   gracefulShutdown(function () {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });


// Define Required Variables
const bundler = webpack(config),
      appPort = 8001,
      uiPort = 3000,
      weinrePort = 3001,
      WP_INDEX_FILE = `src/*.html`,
      WP_STYLESHEETS_MAIN_FILE = `./src/stylesheets/*.scss`,
      WP_STYLESHEETS_ADDTIONAL_FILES = `./src/stylesheets/*/*.scss`,
      stylesSrc = `./src/stylesheets/styles.scss`,
      stylesDest = `./src/public/styles`,
      mainStyleSheet = `./src/stylesheets/*/*.scss`,
      tertiaryStyleSheets = `./src/stylesheets/*/*.scss`,
      mainHTML = `./src/*.html`,
      imagesSrc = `./src/public/images/**/*.+(png|jpg|gif|svg)`,
      imagesDest = `./src/public/images`,
      fontsSrc = `./src/public/fonts/**/*`,
      fontsDest = `./src/public/fonts`;

// Error Function For Plumber
const onError = function (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};


/*--------------------------
          GULP TASKS
----------------------------*/
gulp.task('default', ['styles','bs'], () => {
  // const tasks = Object.keys(gulp.tasks).sort();
  // gutil.log(gutil.colors.yellow(`List Of Available Gulp Tasks:`));
  // tasks.forEach(t => {
  //   if(t === 'default') return;
  //     gutil.log(gutil.colors.yellow(`• gulp ${t}`));
  // })
  gulp.watch(tertiaryStyleSheets, ['styles']);
  gulp.watch(mainStyleSheet, ['styles']);
  gulp.watch(mainHTML, ['bs']);
})

gulp.task('env', () => {
  process.env.NODE_ENV === `development` ? browserSync.create() : gutil.noop();
})

// Browser Sync with Webpack as middleware. Hot Module Reloading enabled.
gulp.task('bs', ['env'], () => {
  browserSync.init({
    port: appPort,
    server: {
      baseDir: 'src',
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: config.output.publicPath,
          stats: { colors: true },
          hot: true,
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
    ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
    },
    logPrefix: 'Abyss',
    logLevel: 'error', // Options: trace, debug, warn, info, error, silent. Order is from most verbose output to least.
    logConnections: false,
    logFileChanges: true,
    online: true,
    open: false,
    reloadOnRestart: true,
    scrollProportionally: true,
    injectChanges: true,
    timestamps: false,
    files: [
      WP_INDEX_FILE,
      WP_STYLESHEETS_MAIN_FILE,
      WP_STYLESHEETS_ADDTIONAL_FILES
    ]
  })
  // notifier.notify({
  //   'title': 'STATUS: READY!',
  //   'message': 'Browser Connected To Browser-Sync'
  // })
})


gulp.task('nodemon', ['env'], (cb) => {
  let called = false;
  nodemon({
    script: './server',
    ext: '.js',
    watch: ['./server.js'],
    ignore: [
      `node_modules/**/*.js`,
    ],
    debug: true,
    // env: process.env.NODE_ENV === `development` ? process.env.NODE_ENV : DotEnv.config({path: './.env-config'}),
  }).on('start', () => {
    if (!called) {
      called = true;
      cb();
    }
  }).on('restart', () => {
    setTimeout(() => {
      browserSync.reload({ stream: false });
    }, 500)
  }).on('error', (err) => {
    throw err;
  })
})

gulp.task('debug', function () {
    gulp.src([])
        .pipe(nodeInspector({
            debugPort: 5858,
            webHost: '0.0.0.0',
            webPort: 8080,
            saveLiveEdit: true,
            preload: true,
            inject: true,
            hidden: [],
            stackTraceLimit: 50,
            sslKey: '',
            sslCert: ''
        }));
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
// const chalkSuccess = chalk.white.bold.bgBlue,
//       chalkInfo = chalk.white.bold.bgBlue,
//       chalkMainMsgStr = chalk.white.bold.underline,
//       chalkEndMsgStr = chalk.grey,
//       chalkAccessMsgStr = chalk.yellow,
//       chalkDev = chalk.cyan.bold,
//       chalkLine = chalk.magenta.bold;
// const mainMsgOutputStr = chalkMainMsgStr('RUNNING IN'),
//       devMode = chalkDev('DEV'),
//       mainMsgOutput = mainMsgOutputStr + ': ' + devMode,
//       accessMsgOutputStrOne = chalkAccessMsgStr('URL For Local Viewing:'),
//       localURL = chalkDev('http://localhost:'+appPort),
//       accessMsgOutputOne = accessMsgOutputStrOne + ' ' + localURL,
//       accessMsgOutputStrTwo = chalkAccessMsgStr('URL For Viewing Browser Sync UI:'),
//       externalURL = chalkDev('http://localhost:'+uiPort),
//       accessMsgOutputTwo = accessMsgOutputStrTwo + ' ' + externalURL,
//       endMsgOutput = chalkEndMsgStr('For More Dev Features, update Browser-Sync\'s "logLevel" option');


  //    console.log(chalkLine('------------------------------------------------------------------------------'))
  // console.log(chalkSuccess('                                                                              '))
  // console.log(chalkSuccess('                          '+mainMsgOutput+'                                     '))
  //    console.log(chalkInfo('             '+accessMsgOutputOne+'                     '))
  // console.log(chalkSuccess('             '+accessMsgOutputTwo+'           '))
  // console.log(chalkSuccess('                                                                              '))
  // console.log(chalkSuccess('         '+endMsgOutput+'       '))
  //    console.log(chalkLine('------------------------------------------------------------------------------'))
