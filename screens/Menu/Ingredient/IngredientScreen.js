import React, { memo } from 'react'
import { Text, View } from 'react-native'
import { withTheme } from 'react-native-paper'

export const IngredientScreen = withTheme(props => {
    return (
        <View style={container}>
            <Text>Ingredient</Text>
        </View>
    )
})
