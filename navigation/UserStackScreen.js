import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { UserScreen } from './../screens/User'
import { HeaderContent } from './../components/Header'

const UserStack = createStackNavigator()

export const UserStackScreen = props => {
    return (
        <UserStack.Navigator
            initialRouteName={navigationConstants.SCREENS.USER}
            headerMode="screen"
            screenOptions={{
                header: ({ scene, previous, navigation }) => (
                    <HeaderContent scene={scene} previous={previous} navigation={navigation} />
                ),
            }}>
            <UserStack.Screen name={navigationConstants.SCREENS.USER}>
                {props => <UserScreen {...props} />}
            </UserStack.Screen>
        </UserStack.Navigator>
    )
}
