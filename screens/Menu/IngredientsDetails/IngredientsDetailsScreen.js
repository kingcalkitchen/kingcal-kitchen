import React from 'react'
import { Text, View } from 'react-native'
import { withTheme } from 'react-native-paper'

export const IngredientsDetailsScreen = withTheme(props => {
    return (
        <View style={container}>
            <Text>Ingredients Details</Text>
        </View>
    )
})
