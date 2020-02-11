import { createBrowserApp } from '@react-navigation/web'
import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//import MainTabNavigator from './MainTabNavigator'

import HomeScreen from './../screens/Home/HomeScreen'
import SettingsScreen from './../screens/Settings/SettingsScreen'
import LoginScreen from './../screens/Login/LoginScreen'
import AuthLoadingScreen from './../screens/AuthLoadingScreen'

const AppStack = createStackNavigator({ Home: HomeScreen, Settings: SettingsScreen })
const AuthStack = createStackNavigator({ SignIn: LoginScreen })


// const switchNavigator = createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// })
// switchNavigator.path = ''

const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
},
{
  initialRouteName: 'AuthLoading',
})
switchNavigator.path = '' 

export default createBrowserApp(switchNavigator, { history: 'hash' })
