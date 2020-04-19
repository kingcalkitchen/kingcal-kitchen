import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Text, View, withTheme } from 'react-native-paper'

import { styles } from './styles'

export const ViewIngredientsButton = withTheme(props => {
    return (
        <TouchableHighlight onPress={props.onPress}>
            <View style={[styles.container, { borderColor: props.theme.colors.primary }]}>
                <Text style={[styles.text, { color: props.theme.colors.primary }]}>View Ingredients</Text>
            </View>
        </TouchableHighlight>
    )
})