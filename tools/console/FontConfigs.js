/*======================================================================
                    CONSOLE FONT CONFIGURATIONS
======================================================================*/
import { Line, Star } from './ShapeConfigs'
import { RedBold, YellowBold, WhiteBoldBgBlueUnderline } from './StyleConfigs'


/*-------------------------------
    Main Variable Definitions
--------------------------------*/

  // Container configs and settings
  const appLineStyle = RedBold,
        appStarStyle = YellowBold,
        appShapeLine = appLineStyle(Line),
        appShapeStar = appStarStyle(Star),
        appContainerMaxLength = 1024;

  // Title configs and settings
  const appTitlePadding = `  `,
        appTitleStringOne = `Abyss`,
        appTitleStringTwo = `JS`,
        appTitleStringContainer = `${appTitlePadding}${appTitleStringOne} ${appTitleStringTwo}${appTitlePadding}`,
        appTitleMaxLength = appContainerMaxLength;

  // Description configs and settings
  const appDescriptionStyle = WhiteBoldBgBlueUnderline,
        appDescriptionPadding = `     `,
        appDescriptionShapes = `${appShapeStar} ${appShapeStar} ${appShapeStar}`,
        appDescriptionString = appDescriptionStyle(` An Automation Swiss Army Knife For Bleeding Edge Tech Dev `),
        appDescriptionContainer = `${appDescriptionShapes}  ${appShapeLine} ${appDescriptionString} ${appShapeLine} ${appDescriptionShapes}`,
        appDescriptionMaxLength = appContainerMaxLength;


/*-------------------------------
        Main Exports
--------------------------------*/

  // Title settings object
  export const AppTitleSettings = {
                 'text': `${appTitleStringContainer}`,
                 'font': 'block',
                 'colors': [`white`, `cyan`],
                 'background': 'Black',
                 'letterSpacing': 1,
                 'space': true,
                 'maxLength': `${appTitleMaxLength}`
               }

  // Description settings object
  export const AppDescriptionSettings = {
                 'text': `${appDescriptionPadding}${appDescriptionContainer}${appDescriptionPadding}`,
                 'font': `console`,
                 'background': `Cyan`,
                 'letterSpacing': 2,
                 'space': false,
                 'maxLength': `${appDescriptionMaxLength}`
               }
