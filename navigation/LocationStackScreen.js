import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { LocationsScreen } from './../screens/Locations'

const LocationStack = createStackNavigator()

export const LocationStackScreen = props => {
    return (
        <LocationStack.Navigator initialRouteName={navigationConstants.SCREENS.LOCATIONS} headerMode="none">
            <LocationStack.Screen name={navigationConstants.SCREENS.LOCATIONS}>
                {props => <LocationsScreen {...props} />}
            </LocationStack.Screen>
        </LocationStack.Navigator>
    )
}
