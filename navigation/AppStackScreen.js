import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { navigationConstants } from './../core-module/_constants'
import { DrawerContent } from './../components/Drawer'
import { TabsStackScreen } from './TabsStackScreen'
import { UserStackScreen } from './UserStackScreen'
import { AdminStackScreen } from './AdminStackScreen'
import { SystemAdminStackScreen } from './SystemAdminStackScreen'

const DrawerStack = createDrawerNavigator()

export const AppStackScreen = props => {
    return (
        <DrawerStack.Navigator initialRouteName={navigationConstants.STACKS.TABS} drawerContent={props => <DrawerContent {...props} />}>
            <DrawerStack.Screen name={navigationConstants.STACKS.TABS} component={TabsStackScreen} />
            <DrawerStack.Screen name={navigationConstants.STACKS.USER} component={UserStackScreen} />
            <DrawerStack.Screen name={navigationConstants.STACKS.ADMIN} component={AdminStackScreen} />
            <DrawerStack.Screen name={navigationConstants.STACKS.SYSTEM_ADMIN} component={SystemAdminStackScreen} />
        </DrawerStack.Navigator>
    )
}
