import React from 'react'
import { withTheme } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { HomeStackScreen } from './HomeStackScreen'
import { MenuTabs } from './MenuTabNavigator'
import { LocationStackScreen } from './LocationStackScreen'
import { FeedStackScreen } from './FeedStackScreen'
import { HeaderContent } from '../components/Header'

import { navigationConstants } from './../core-module/_constants'

const Tab = createMaterialBottomTabNavigator()
const TabsStack = createStackNavigator()

const BottomTabs = withTheme(props => {
  const { theme } = props

  return (
    <Tab.Navigator
      initialRouteName={navigationConstants.STACKS.HOME}
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: theme.colors.primary }}
    >
      <Tab.Screen
        name={navigationConstants.STACKS.HOME}
        component={HomeStackScreen}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name={navigationConstants.STACKS.FEED}
        component={FeedStackScreen}
        options={{
          tabBarIcon: 'menu',
        }}
      />
      <Tab.Screen
        name={navigationConstants.STACKS.LOCATIONS}
        component={LocationStackScreen}
        options={{
          tabBarIcon: 'compass',
        }}
      />
      <Tab.Screen
        name={navigationConstants.STACKS.MENU}
        component={MenuTabs}
        options={{
          tabBarIcon: 'food-fork-drink',
        }}
      />
    </Tab.Navigator>
  )
})

export const TabsStackScreen = withTheme(props => {
  return (
    <TabsStack.Navigator
      initialRouteName={navigationConstants.STACKS.BOTTOM_TABS}
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <HeaderContent scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <TabsStack.Screen name={navigationConstants.STACKS.BOTTOM_TABS}>
        {props => <BottomTabs {...props} />}
      </TabsStack.Screen>
    </TabsStack.Navigator>
  )
})
