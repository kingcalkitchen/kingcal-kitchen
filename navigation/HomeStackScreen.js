import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { HomeScreen } from './../screens/HomeScreen'

const HomeStack = createStackNavigator()
export const HomeStackScreen = props => {
    const { signOut } = props

    return ( 
        <HomeStack.Navigator>
          <HomeStack.Screen name={navigationConstants.HOME}>
            {props => <HomeScreen {...props} signOut={signOut} />}
          </HomeStack.Screen>
        </HomeStack.Navigator>
      )
}
