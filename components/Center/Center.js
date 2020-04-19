import React from 'react'
import { View } from 'react-native'
import { withTheme } from 'react-native-paper'

export const Center = withTheme(props => {
    const { theme, children } = props

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </View>
    )
})
