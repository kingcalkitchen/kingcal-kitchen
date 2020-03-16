import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { LocationsScreen } from './../screens/Locations/LocationsScreen'
import { LocationDetail } from './../screens/Locations/LocationDetail'

const LocationStack = createStackNavigator()
export const LocationStackScreen = props => {
    return (
        <LocationStack.Navigator>
            <LocationStack.Screen name={navigationConstants.LOCATIONS}>
                {props => <LocationsScreen {...props} />}
            </LocationStack.Screen>
            <LocationStack.Screen name={navigationConstants.LOCATION_DETAIL}>
                {props => <LocationDetail {...props} />}
            </LocationStack.Screen>
        </LocationStack.Navigator>
    )
}