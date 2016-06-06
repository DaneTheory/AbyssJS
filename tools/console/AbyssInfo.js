import FONTS from 'cfonts'
import { AppTitleSettings, AppDescriptionSettings } from './FontConfigs'


export const AbyssInfo = () => {
    const appTitle = new FONTS(AppTitleSettings),
          appDescription = new FONTS(AppDescriptionSettings);
}

// var ProgressBar = require('progress');

// SIMPLE EXAMPLE
// var bar = new ProgressBar(':bar', { total: 10 });
// var timer = setInterval(function () {
//   bar.tick();
//   if (bar.complete) {
//     console.log('\ncomplete\n');
//     clearInterval(timer);
//   }
// }, 100);

// FORWARD BACKWARD EXAMPLE
// var bar = new ProgressBar('  :title [:bar] :percent', {
//   complete: '='
// , incomplete: ' '
// , width: 30
// , total: 100
// });
// function forward() {
// bar.tick(1, { title: 'forward ' });
// if (bar.curr > 60) {
//   backward();
// } else {
//   setTimeout(forward, 20);
// }
// }
//
// function backward() {
// bar.tick(-1, { title: 'backward' });
// if (bar.curr == 0) {
//   bar.terminate();
// } else {
//   setTimeout(backward, 20);
// }
// }
//
// forward();


// COLORS EXAMPLE
// var green = '\u001b[42m \u001b[0m';
// var red = '\u001b[41m \u001b[0m';
//
//
// var bar = new ProgressBar('  [:bar]', {
//   complete: green,
//   incomplete: red,
//   total: 20
// });
//
// var id = setInterval(function (){
//   bar.tick();
//   if (bar.complete) {
//     clearInterval(id);
//   }
// }, 100);

// CUSTOM TOKENS EXAMPLE
// var list = [
//   'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
//   'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
//   'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
//   'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
//   'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'
// ]
//
// var bar = new ProgressBar(':percent eta: :eta downloading :current/:total :file', {
//   total: list.length
// })
//
// var id = setInterval(function (){
//   bar.tick({
//     'file': list[bar.curr]
//   })
//   if (bar.complete) {
//     clearInterval(id)
//   }
// }, 500)

// DOWNLOAD SIMULATION EXAMPLE
// var contentLength = 128 * 1024;
//
// var bar = new ProgressBar('  downloading [:bar] :percent :etas', {
//     complete: '='
//   , incomplete: ' '
//   , width: 20
//   , total: contentLength
// });
//
// (function next() {
//   if (contentLength) {
//     var chunk = Math.random() * 10 * 1024;
//     bar.tick(chunk);
//
//     if (!bar.complete) {
//       setTimeout(next, Math.random() * 1000);
//     }
//   }
// })();


// EXACT PROGRESS EXAMPLE
// var bar = new ProgressBar('  progress [:bar] :percent :etas', {
//     complete: '='
//   , incomplete: ' '
//   , width: 40
//   , total: 100
// });
//
// var i = 0, steps = [0.1, 0.25, 0.6, 0.8, 0.4, 0.5, 0.6, 0.2, 0.8, 1.0];
//
// (function next() {
//   if (i >= steps.length) {
//   } else {
//     bar.update(steps[i++]);
//     setTimeout(next, 500);
//   }
// })();


// EXAMPLE VARIOUS FORMATS
// var bar = new ProgressBar('  :bar :title', { total: 10 });
//
// var id = setInterval(function(){
//   var randomTitle = ['some', 'random', 'title'][Math.random() * 3 | 0];
//   bar.tick({ title: randomTitle });
//   if (bar.complete) {
//     clearInterval(id);
//     bar2();
//   }
// }, 100);
//
// function bar2() {
//   var bar = new ProgressBar('  processing: [:bar]', {
//       total: 15
//     , complete: '*'
//     , incomplete: ' '
//   });
//
//   var id = setInterval(function(){
//     bar.tick();
//     if (bar.complete) {
//       clearInterval(id);
//       bar3();
//     }
//   }, 100);
// }
//
// function bar3() {
//   var bar = new ProgressBar('  download |:bar| :percent', {
//       complete: '='
//     , incomplete: ' '
//     , width: 40
//     , total: 20
//   });
//
//   var id = setInterval(function(){
//     bar.tick();
//     if (bar.complete) {
//       clearInterval(id);
//       bar4();
//     }
//   }, 100);
// }
//
// function bar4() {
//   var bar = new ProgressBar('  :current of :total :percent', {
//     total: 20
//   });
//
//   var id = setInterval(function(){
//     bar.tick();
//     if (bar.complete) {
//       clearInterval(id);
//       bar5();
//     }
//   }, 100);
// }
//
// function bar5() {
//   var bar = new ProgressBar('  [:bar] :elapseds elapsed, eta :etas', {
//       width: 8
//     , total: 50
//   });
//
//   var id = setInterval(function(){
//     bar.tick();
//     if (bar.complete) {
//       clearInterval(id);
//     }
//   }, 300);
// }

// EXAMPLE FULL WIDTH
// var bar = new ProgressBar('  downloading [:bar] :percent :etas', {
//     complete: '='
//   , incomplete: ' '
//   , width: 1024     /* something longer than the terminal width */
//   , total: 100
// });
//
// (function next() {
//   bar.tick(1);
//
//   if (!bar.complete) {
//     setTimeout(next, 10);
//   }
// })();

// OPTIONS
// total           total number of ticks to complete
// width           the displayed width of the progress bar defaulting to total
// stream          the output stream defaulting to stderr
// complete        completion character defaulting to "="
// incomplete      incomplete character defaulting to "-"
// renderThrottle  minimum time between updates in milliseconds defaulting to 16
// clear           option to clear the bar on completion defaulting to false
// callback        optional function to call when the progress bar completes

//TOKENS
// :bar               the progress bar itself
// :current           current tick number
// :total             total ticks
// :elapsed           time elapsed in seconds
// :percent           completion percentage
// :eta               estimated completion time in seconds

// var FONTS = require('cfonts');
// var fonts = new FONTS({
//     'text': 'AbyssJS', //text to be converted
//     'font': 'block', //define the font face
//                       // FONTS:
//                       // console [colors: 1]
//                       // block [colors: 2]
//                       // simple [colors: 1]
//                       // 3d [colors: 2]
//                       // simple3d [colors: 1]
//     'colors': ['cyan', 'white'], //define all colors
//                    // COLORS:
//                     // black
//                     // red
//                     // green
//                     // yellow
//                     // blue
//                     // magenta
//                     // cyan
//                     // white
//                     // gray
//     'background': 'Black', //define the background color
//                             // BG COLORS
//                             // Black
//                             // Red
//                             // Green
//                             // Yellow
//                             // Blue
//                             // Magenta
//                             // Cyan
//                             // White
//     'letterSpacing': 2, //define letter spacing
//     'space': true, //define if the output text should have empty lines on top and on the bottom
//     'maxLength': '10' //define how many character can be on one line
// })





//EVENT EXAMPLE
// const spinners = ['foo', 'bar', 'baz', 'qux']
//
// // instantiate and start spinners
// const m = new Multispinner(spinners)
//
// // finish spinners in staggered timeouts
// setTimeout(() => m.success('foo'), 1000)
// setTimeout(() => m.error('bar'), 1500)
// setTimeout(() => m.success('baz'), 2000)
// setTimeout(() => m.error('qux'), 2500)
//
// // do something on success/error events
// m.on('success', () => {
//   // does not fire in this example because m.error is called
//   console.log('done without errors!')
// }).on('err', (e) => {
//   console.log(`${e} spinner finished with an error`)
// })


//CUSTOM ANIMATION EXAMPLE
// const figures = require('figures')
//
// // constants
// const spinners = ['task A', 'task B', 'task C']
// const opts = {
//   'interval': 120,
//   'preText': 'Completing',
//   'frames': [
//     '[      ]',
//     '[*     ]',
//     '[**    ]',
//     '[ **   ]',
//     '[  **  ]',
//     '[   ** ]',
//     '[    **]',
//     '[     *]'
//   ],
//   'symbol': {
//     'success': ' '.repeat(7) + figures.tick
//   }
// }
//
// // initialize
// const m = new Multispinner(spinners, opts)
//
// // staggered completion
// const t = 1500
// let i = 0
// function loop() {
//   setTimeout(() => {
//     m.success(spinners[i])
//     i++
//     if (i < spinners.length) loop()
//   }, t)
// }
// loop()







// const boxen = require('boxen');
//
// gulp.task('inq', function () {
//   console.log(boxen('AbyssJS', {borderColor: 'yellow', padding: {top: 2, bottom: 2, left: 18, right: 18}, margin: {top: 1, bottom: 1, left: 15, right: 15}, borderStyle: 'double', dimBorder: false, backgroundColor: 'black'}));
// })




// var Canvas = require('drawille');
// var line = require('bresenham');
//
// var c = new Canvas(160, 160);
//
// function draw() {
//   c.clear();
//   var t = new Date();
//   var sin = function(i, l) {
//     return Math.floor(Math.sin(i*2*Math.PI)*l+80);
//   }, cos = function(i, l) {
//     return Math.floor(Math.cos(i*2*Math.PI)*l+80);
//   };
//   line(80, 80, sin(t.getHours()/24, 30), 160-cos(t.getHours()/24, 30), c.set.bind(c));
//   line(80, 80, sin(t.getMinutes()/60, 50), 160-cos(t.getMinutes()/60, 50), c.set.bind(c));
//   line(80, 80, sin(t.getSeconds()/60+(+t%1000)/60000, 75), 160-cos(t.getSeconds()/60+(+t%1000)/60000, 75), c.set.bind(c));
//   process.stdout.write(c.frame());
// }
//
// THIS
// setInterval(draw, 1000/24);
// OR
// draw()






// var inquirer = require('inquirer');
// var prompt = inquirer.createPromptModule();


// LIST EXAMPLE
// inquirer.prompt([
//   {
//     type: 'list',
//     name: 'theme',
//     message: 'What do you want to do?',
//     choices: [
//       'Order a pizza',
//       'Make a reservation',
//       new inquirer.Separator(),
//       'Ask for opening hours',
//       {
//         name: 'Contact support',
//         disabled: 'Unavailable at this time'
//       },
//       'Talk to the receptionist'
//     ]
//   },
//   {
//     type: 'list',
//     name: 'size',
//     message: 'What size do you need?',
//     choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
//     filter: function (val) {
//       return val.toLowerCase();
//     }
//   }
// ]).then(function (answers) {
//   console.log(JSON.stringify(answers, null, '  '));
// });

// INPUT EXAMPLE
// var questions = [
//   {
//     type: 'input',
//     name: 'first_name',
//     message: 'What\'s your first name'
//   },
//   {
//     type: 'input',
//     name: 'last_name',
//     message: 'What\'s your last name',
//     default: function () {
//       return 'Doe';
//     }
//   },
//   {
//     type: 'input',
//     name: 'phone',
//     message: 'What\'s your phone number',
//     validate: function (value) {
//       var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
//       if (pass) {
//         return true;
//       }
//
//       return 'Please enter a valid phone number';
//     }
//   }
// ];
//
// inquirer.prompt(questions).then(function (answers) {
//   console.log(JSON.stringify(answers, null, '  '));
// });


// PASSWORD EXAMPLE
// inquirer.prompt([
//   {
//     type: 'password',
//     message: 'Enter your git password',
//     name: 'password'
//   }
// ]).then(function (answers) {
//   console.log(JSON.stringify(answers, null, '  '));
// })


// FULL WORKING EXAMPLE
// console.log('Hi, welcome to Node Pizza');
//
// var questions = [
//   {
//     type: 'confirm',
//     name: 'toBeDelivered',
//     message: 'Is this for delivery?',
//     default: false
//   },
//   {
//     type: 'input',
//     name: 'phone',
//     message: 'What\'s your phone number?',
//     validate: function (value) {
//       var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
//       if (pass) {
//         return true;
//       }
//
//       return 'Please enter a valid phone number';
//     }
//   },
//   {
//     type: 'list',
//     name: 'size',
//     message: 'What size do you need?',
//     choices: ['Large', 'Medium', 'Small'],
//     filter: function (val) {
//       return val.toLowerCase();
//     }
//   },
//   {
//     type: 'input',
//     name: 'quantity',
//     message: 'How many do you need?',
//     validate: function (value) {
//       var valid = !isNaN(parseFloat(value));
//       return valid || 'Please enter a number';
//     },
//     filter: Number
//   },
//   {
//     type: 'expand',
//     name: 'toppings',
//     message: 'What about the toppings?',
//     choices: [
//       {
//         key: 'p',
//         name: 'Pepperoni and cheese',
//         value: 'PepperoniCheese'
//       },
//       {
//         key: 'a',
//         name: 'All dressed',
//         value: 'alldressed'
//       },
//       {
//         key: 'w',
//         name: 'Hawaiian',
//         value: 'hawaiian'
//       }
//     ]
//   },
//   {
//     type: 'rawlist',
//     name: 'beverage',
//     message: 'You also get a free 2L beverage',
//     choices: ['Pepsi', '7up', 'Coke']
//   },
//   {
//     type: 'input',
//     name: 'comments',
//     message: 'Any comments on your purchase experience?',
//     default: 'Nope, all good!'
//   },
//   {
//     type: 'list',
//     name: 'prize',
//     message: 'For leaving a comment, you get a freebie',
//     choices: ['cake', 'fries'],
//     when: function (answers) {
//       return answers.comments !== 'Nope, all good!';
//     }
//   }
// ];
//
// inquirer.prompt(questions).then(function (answers) {
//   console.log('\nOrder receipt:');
//   console.log(JSON.stringify(answers, null, '  '));
// });


// RECURSIVE EXAMPLE
// var output = [];
//
// var questions = [
//   {
//     type: 'input',
//     name: 'tvShow',
//     message: 'What\'s your favorite TV show?'
//   },
//   {
//     type: 'confirm',
//     name: 'askAgain',
//     message: 'Want to enter another TV show favorite (just hit enter for YES)?',
//     default: true
//   }
// ];
//
// function ask() {
//   inquirer.prompt(questions).then(function (answers) {
//     output.push(answers.tvShow);
//     if (answers.askAgain) {
//       ask();
//     } else {
//       console.log('Your favorite TV Shows:', output.join(', '));
//     }
//   });
// }
//
// ask();


// WHEN EXAMPLE
// var questions = [
//   {
//     type: 'confirm',
//     name: 'bacon',
//     message: 'Do you like bacon?'
//   },
//   {
//     type: 'input',
//     name: 'favorite',
//     message: 'Bacon lover, what is your favorite type of bacon?',
//     when: function (answers) {
//       return answers.bacon;
//     }
//   },
//   {
//     type: 'confirm',
//     name: 'pizza',
//     message: 'Ok... Do you like pizza?',
//     when: function (answers) {
//       return !likesFood('bacon')(answers);
//     }
//   },
//   {
//     type: 'input',
//     name: 'favorite',
//     message: 'Whew! What is your favorite type of pizza?',
//     when: likesFood('pizza')
//   }
// ];
//
// function likesFood(aFood) {
//   return function (answers) {
//     return answers[aFood];
//   };
// }
//
// inquirer.prompt(questions).then(function (answers) {
//   console.log(JSON.stringify(answers, null, '  '));
// });


// MAYBE ONCE?
// var one = require('one-time');
//
// function load(file, fn) {
//   fn = one(fn);
//
//   eventemitter.once('load', fn);
//   eventemitter.once('error', fn);
//
//   // do stuff
//   eventemitter.emit('error', new Error('Failed to load, but still finished'));
//   eventemitter.emit('load');
// }
//
// function example(fn) {
//   fn = one(fn);
//
//   fn();
//   fn('also receives all arguments');
//   fn('it returns the same value') === 'bar';
//   fn('never');
//   fn('gonna');
//   fn('give');
//   fn('you');
//   fn('up');
// }
//
// example(function () {
//   console.log('bar');
//   return 'bar'
// })






// const testIcons = () => {
//   console.log(logSymbols.success, 'test success icon');
//   console.log(logSymbols.info, 'test info icon');
//   console.log(logSymbols.warning, 'test warning icon');
//   console.log(logSymbols.error, 'test error icon');
// }
//
// const logUpdate = require('log-update');
// const frames = ['-', '\\', '|', '/'];
// let i = 0;

// setInterval(() => {
//     const frame = frames[i = ++i % frames.length];
//
//     logUpdate(
// `
//         ♥♥
//    ${frame} unicorns ${frame}
//         ♥♥
// `
//     );
// }, 80);

// API
// logUpdate(text, ...)
//
// Log to stdout.
//
// logUpdate.clear()
//
// Clear the logged output.
//
// logUpdate.done()
//
// Persist the logged output.
// Useful if you want to start a new log session below the current one.
//
// logUpdate.stderr(text, ...)
//
// Log to stderr.
//
// logUpdate.stderr.clear()
//
// logUpdate.stderr.done()
//
// logUpdate.create(stream)
