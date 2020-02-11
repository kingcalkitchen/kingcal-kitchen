import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import TabBarIcon from './../components/TabBarIcon'
import HomeScreen from './../screens/HomeScreen'
//import SettingsScreen from './../screens/SettingsScreen'
import UserScreen from './../screens/UserScreen'
import MenuScreen from './../screens/MenuScreen'
import AdminScreen from './../screens/AdminScreen'

const HomeStack = createStackNavigator(
  { Home: HomeScreen },
  { headerMode: 'none' }
)
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? 'ios-home' : 'md-home' } />
  ),
}
HomeStack.path = ''

const UserStack = createStackNavigator(
  { User: UserScreen },
  { headerMode: 'none' }
)
UserStack.navigationOptions = {
  tabBarLabel: 'User',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
}
UserStack.path = ''

const MenuStack = createStackNavigator(
  { Menu: MenuScreen },
  { headerMode: 'none' }
)
MenuStack.navigationOptions = {
  tabBarLabel: 'Menu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'} />
  ),
}
MenuStack.path = ''

const AdminStack = createStackNavigator(
  { Admin: AdminScreen },
  { headerMode: 'none' }
)
AdminStack.navigationOptions = {
  tabBarLabel: 'Admin',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-construct' : 'md-construct'} />
  ),
}
AdminStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  UserStack,
  MenuStack,
  AdminStack,
})

tabNavigator.path = ''

export default tabNavigator
