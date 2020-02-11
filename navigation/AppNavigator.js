import React from 'react' 
import { createAppContainer, createSwitchNavigator } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'

import MainTabNavigator from './MainTabNavigator' 

import RegisterScreen from './../screens/RegisterScreen'
import LoginScreen from './../screens/LoginScreen'
import AuthLoadingScreen from './../screens/AuthLoadingScreen'

const AuthStack = createStackNavigator({ 
  SignIn: LoginScreen,
  Signup: RegisterScreen,
}, { headerMode: 'none' }) 

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  })
)
