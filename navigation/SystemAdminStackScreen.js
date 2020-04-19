import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { SystemAdminScreen, MenuScreen, UsersScreen } from './../screens/Admin'
import { HeaderContent } from './../components/Header'

const SystemAdminStack = createStackNavigator()

export const SystemAdminStackScreen = props => {
    return (
        <SystemAdminStack.Navigator
            initialRouteName={navigationConstants.SCREENS.SYSTEM_ADMIN}
            headerMode="screen"
            screenOptions={{
                header: ({ scene, previous, navigation }) => (
                    <HeaderContent scene={scene} previous={previous} navigation={navigation} />
                ),
            }}>
            <SystemAdminStack.Screen name={navigationConstants.SCREENS.SYSTEM_ADMIN}>
                {props => <SystemAdminScreen {...props} />}
            </SystemAdminStack.Screen>
            <SystemAdminStack.Screen name={navigationConstants.SCREENS.ADMIN_MENU}>
                {props => <MenuScreen {...props} />}
            </SystemAdminStack.Screen>
            <SystemAdminStack.Screen name={navigationConstants.SCREENS.ADMIN_USERS}>
                {props => <UsersScreen {...props} />}
            </SystemAdminStack.Screen>
        </SystemAdminStack.Navigator>
    )
}
