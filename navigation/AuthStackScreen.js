import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { ForgotPasswordScreen, LoginScreen, RegisterScreen } from './../screens/Auth'

const AuthStack = createStackNavigator()

export const AuthStackScreen = props => {
    return (
        <AuthStack.Navigator initialRouteName={navigationConstants.SCREENS.LOGIN} headerMode="none">
            <AuthStack.Screen name={navigationConstants.SCREENS.LOGIN}>
                {props => <LoginScreen {...props} />}
            </AuthStack.Screen>
            <AuthStack.Screen name={navigationConstants.SCREENS.FORGOT_PASSWORD}>
                {props => <ForgotPasswordScreen {...props} />}
            </AuthStack.Screen>
            <AuthStack.Screen name={navigationConstants.SCREENS.REGISTER}>
                {props => <RegisterScreen {...props} />}
            </AuthStack.Screen>
        </AuthStack.Navigator>
    )
}
