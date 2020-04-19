import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { navigationConstants } from './../core-module/_constants'
import { MenuStackScreen } from './MenuStackScreen'
import { CategoriesScreen } from './../screens/Menu/Categories'
import { SearchScreen } from './../screens/Menu/Search'

const Tab = createMaterialTopTabNavigator()

export const MenuTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={navigationConstants.MENU_TABS.MENU} component={MenuStackScreen} />
            <Tab.Screen name={navigationConstants.MENU_TABS.CATEGORIES} component={CategoriesScreen} />
            <Tab.Screen name={navigationConstants.MENU_TABS.SEARCH} component={SearchScreen} />
        </Tab.Navigator>
    )
}
