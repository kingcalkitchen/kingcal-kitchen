import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'react-native'

import { AuthProvider } from '../core-module/_contexts/AuthProvider'
import { RootNavigator } from './RootNavigator'

import { theme } from './../misc'

export const Providers = props => {
    return (
        <AuthProvider>
            <PaperProvider theme={theme}>
                <StatusBar barStyle="dark-content" />
                <RootNavigator />
            </PaperProvider>
        </AuthProvider>
    )
}
