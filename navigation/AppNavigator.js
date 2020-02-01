import React from 'react' 
import { createAppContainer, createSwitchNavigator } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'

//import MainTabNavigator from './MainTabNavigator' 

import HomeScreen from './../screens/Home/HomeScreen'
import SettingsScreen from './../screens/Settings/SettingsScreen'
import LoginScreen from './../screens/Login/LoginScreen'
import AuthLoadingScreen from './../screens/AuthLoadingScreen'

const AppStack = createStackNavigator({ Home: HomeScreen, Settings: SettingsScreen }) 
const AuthStack = createStackNavigator({ SignIn: LoginScreen }) 

// export default createAppContainer(
//   createSwitchNavigator({
//     // You could add another route here for authentication.
//     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//     Main: MainTabNavigator,
//   })
// ) 

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  })
)
