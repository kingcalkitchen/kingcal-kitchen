import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { HomeScreen } from './../screens/Home'

const HomeStack = createStackNavigator()

export const HomeStackScreen = props => {
  return (
    <HomeStack.Navigator initialRouteName={navigationConstants.SCREENS.HOME} headerMode="none">
      <HomeStack.Screen name={navigationConstants.SCREENS.HOME}>
        {props => <HomeScreen {...props} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  )
}
