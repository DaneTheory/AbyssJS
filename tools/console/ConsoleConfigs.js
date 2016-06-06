/*======================================================================
                  MAIN CONSOLE CONFIGURATIONS FILE
======================================================================*/
import Clim from 'clim'
import moment from 'moment'
import chalk from 'chalk'
import Figures from 'figures'


// Primary function expression for console
export const ConsoleConfigs = () => {

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
            //     'success': ' '.repeat(7) + Figures.tick
            //   }
            // }
            // const m = new Multispinner(spinners, opts)
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


Clim(console, true)
// function somefunc(){
//   var logger = Clim(onError, console);
//   logger.warn("in function");
// }
// somefunc()
  // const console = Clim("", {}, {
  //   noFormat: true,
  //   patch: true
  // })

  const newGetDate = (Clim => {
    return moment().format(`${dateStr}`);
  })

  const newGetTime = (Clim => {
    return moment().format(`${timeStr}${a}`);
  })

  let progNameStyle = chalk.magenta.bold.underline,
      progName = progNameStyle(`Abyss`),
      progSeperatorStyle = chalk.blue.bold,
      progSeperator = progSeperatorStyle(`:`),
      pointerStyle = chalk.yellow,
      pointer = pointerStyle(Figures.pointer),
      progStr = `${progName}${progSeperator}${pointer}`;

      const logPrefixDateStyle = chalk.yellow.bold.bgBlack;
      const logPrefixTimeStyle = chalk.blue.bold.bgBlack;

          let year = `YYYY`,
              monthDigitFormat = `MM`,
              monthAbbrevFormat = `MMM`,
              monthFullFormat = `MMMM`,
              dayFullFormat = `dddd`,
              dayAbbrevFormat = `ddd`,
              dayNumberProperFormat = `Do`,
              dayNumberDigitFormat = `DD`;


          let hours = `h`,
              mins = `mm`,
              secs = `ss`,
              a = `a`;

  let dateStr = `${year}/${monthDigitFormat}/${dayNumberDigitFormat}`;
  let timeStr = `${hours}:${mins}:${secs}`;


  let logPrefixWrapStyle = chalk.white.bold,
      logPrefixWrapStart = logPrefixWrapStyle(`[`),
      logPrefixWrapEnd = logPrefixWrapStyle(`]`);

  let logPrefixName = `${logPrefixWrapStart}${progStr}`;
  let logPrefixDate = logPrefixDateStyle(`${newGetDate()}`);
  let logPrefixTime = logPrefixTimeStyle(`${newGetTime()}${logPrefixWrapEnd}`);

  const logPrefixTimeOnly = `${logPrefixName} ${logPrefixTime}`
  const logPrefixFull = `${logPrefixName} ${logPrefixDate} ${logPrefixTime}`

  let logPrefixDefault = false;



  Clim.logWrite = function(level, prefixes, msg, alias=logPrefixDefault ? logPrefixFull : logPrefixTimeOnly) {

    let logLine = `${alias} ${level}: ${msg}\n`
    if(level === `WARN`){
      let logLine = `${alias} ${Figures.warning} ${level}: ${msg}\n`
      process.stderr.write(`${prefixes} ${logLine}`)
    } else if (level === `ERROR`){
        let logLine = `${alias} ${Figures.circleCross} ${level} ${Figures.cross}: ${msg}\n`
        process.stderr.write(`${prefixes} ${logLine}`)
    } else if (level === `INFO`){
        let logLine = `${alias} ${Figures.info}${level}: ${msg}\n`
        process.stderr.write(`${prefixes} ${logLine}`)
    } else if (level === `LOG`){
        let logLine = `${alias} ${Figures.hamburger} ${level}: ${msg}\n`
        process.stderr.write(`${prefixes} ${logLine}`)
    } else{
      process.stderr.write(`${prefixes} ${logLine}`)
    }
  }

 // console.log("message " + process.env.NODE_ENV);
 // console.info("message " + process.env.NODE_ENV);
 // console.warn("message " + process.env.NODE_ENV);
 // console.error("message " + process.env.NODE_ENV);
 // setTimeout(() => m.success('foo'), 1000)
 // setTimeout(() => m.error('bar'), 1500)
 // setTimeout(() => m.success('baz'), 2000)
 // setTimeout(() => m.error('qux'), 2500)

}
