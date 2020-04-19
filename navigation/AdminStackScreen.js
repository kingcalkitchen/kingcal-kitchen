import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { AdminScreen, MenuScreen, UsersScreen } from './../screens/Admin'
import { HeaderContent } from './../components/Header'

const AdminStack = createStackNavigator()

export const AdminStackScreen = props => {
    return (
        <AdminStack.Navigator
            initialRouteName={navigationConstants.SCREENS.ADMIN}
            headerMode="screen"
            screenOptions={{
                header: ({ scene, previous, navigation }) => (
                    <HeaderContent scene={scene} previous={previous} navigation={navigation} />
                ),
            }}>
            <AdminStack.Screen name={navigationConstants.SCREENS.ADMIN}>
                {props => <AdminScreen {...props} />}
            </AdminStack.Screen>
            <AdminStack.Screen name={navigationConstants.SCREENS.ADMIN_MENU}>
                {props => <MenuScreen {...props} />}
            </AdminStack.Screen>
            <AdminStack.Screen name={navigationConstants.SCREENS.ADMIN_USERS}>
                {props => <UsersScreen {...props} />}
            </AdminStack.Screen>
        </AdminStack.Navigator>
    )
}
