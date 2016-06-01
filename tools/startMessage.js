import { chalkSuccess, chalkDev, chalkLine } from './chalkConfig'


const devMode = chalkDev('DEV');

console.log(chalkLine('---------------------------------------------------------------------------'));
console.log(chalkSuccess('                                                                           '));
console.log(chalkSuccess('                     INITIALIZING APP IN '+ devMode +' MODE                          '));
console.log(chalkSuccess('                                                                           '));
console.log(chalkLine('---------------------------------------------------------------------------'));
