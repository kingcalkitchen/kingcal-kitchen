import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { MenuScreen } from './../screens/Menu/Menu'
import { RecipeScreen } from './../screens/Menu/Recipe'

const MenuStack = createStackNavigator()

export const MenuStackScreen = props => {
  return (
    <MenuStack.Navigator initialRouteName={navigationConstants.SCREENS.MENU} headerMode="none">
      <MenuStack.Screen name={navigationConstants.SCREENS.MENU}>
        {props => <MenuScreen {...props} />}
      </MenuStack.Screen>
      <MenuStack.Screen name={navigationConstants.SCREENS.RECIPE}>
        {props => <RecipeScreen {...props} />}
      </MenuStack.Screen>
    </MenuStack.Navigator>
  )
}
