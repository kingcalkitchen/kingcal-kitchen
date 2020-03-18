import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { MenuScreen } from './../screens/Menu/Menu'

const MenuStack = createStackNavigator()
export const MenuStackScreen = props => {
    return (
        <MenuStack.Navigator>
            <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen>
            {/* <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen> */}
            {/* <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen> */}
            {/* <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen> */}
            {/* <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen> */}
            {/* <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen> */}
            {/* <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen> */}
            {/* <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen> */}
            {/* <MenuStack.Screen name={navigationConstants.MENU}>
                {props => <MenuScreen {...props} />}
            </MenuStack.Screen> */}
        </MenuStack.Navigator>
    )
}
