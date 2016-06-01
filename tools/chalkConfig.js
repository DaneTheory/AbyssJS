// Centralized configuration for chalk, which is used to add color to console.log statements.
import chalk  from 'chalk'
export const chalkError = chalk.red;
export const chalkSuccess = chalk.white.bold.bgCyan;
export const chalkDev = chalk.magenta.bold;
export const chalkLine = chalk.yellow.bold;
export const chalkWarning = chalk.yellow;
export const chalkProcessing = chalk.blue;
