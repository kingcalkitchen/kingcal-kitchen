import React from 'react'
import { Text, View } from 'react-native'
import { withTheme } from 'react-native-paper'

export const RecipesListScreen = withTheme(props => {
    return (
        <View style={container}>
            <Text>Recipes List</Text>
        </View>
    )
})
