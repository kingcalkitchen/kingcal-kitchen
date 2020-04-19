import { Dimensions } from 'react-native'
import { configureFonts, DefaultTheme } from 'react-native-paper'

import { APP_THEME } from '../core-module/_styles'

// screen sizing
const { width, height } = Dimensions.get('window')
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height

const recipeNumColums = 2
// item size
const RECIPE_ITEM_HEIGHT = 150
const RECIPE_ITEM_MARGIN = 20

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'FallingSky',
      fontWeight: 'normal',
    },
    // medium: {
    //   fontFamily: 'sans-serif-medium',
    //   fontWeight: 'normal',
    // },
    // light: {
    //   fontFamily: 'sans-serif-light',
    //   fontWeight: 'normal',
    // },
    // thin: {
    //   fontFamily: 'sans-serif-thin',
    //   fontWeight: 'normal',
    // },
  },
}

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    fonts: configureFonts(fontConfig),

    primary: APP_THEME.primary,
    secondary: APP_THEME.secondary,
    error: APP_THEME.error,
  },
}
