import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native-paper'
import * as Font from 'expo-font'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import { navigationConstants } from './../core-module/_constants'
import { AuthContext } from '../core-module/_contexts'
import { Center } from './../components/Center'

import { AuthStackScreen } from './AuthStackScreen'
import { AppStackScreen } from './AppStackScreen'

const RootStack = createStackNavigator()

export const RootNavigator = props => {
    const { token } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                await Font.loadAsync({
                    ...Ionicons.font,
                    ...MaterialIcons.font,
                    
                    'FallingSky': require('./../core-module/_assets/fonts/FallingSky.ttf'),
                    'FallingSkyCond': require('./../core-module/_assets/fonts/FallingSkyCond.ttf'),
                })
            } catch (e) {

            } finally {
                setLoading(false)
            }
        }

        loadResourcesAndDataAsync()
    }, [])

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        )
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                {token ?
                    <RootStack.Screen name={navigationConstants.ROOT_STACK.APP}>
                        {props => <AppStackScreen {...props} />}
                    </RootStack.Screen> :
                    <RootStack.Screen name={navigationConstants.ROOT_STACK.AUTH}>
                        {props => <AuthStackScreen {...props} />}
                    </RootStack.Screen>}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
