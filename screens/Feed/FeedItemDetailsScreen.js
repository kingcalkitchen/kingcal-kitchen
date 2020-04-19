import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-paper'

import { Center } from './../../components/Center'

export const FeedItemDetailsScreen = withTheme(props => {
    return (
        <Center>
            <Text>Feed Item Details Screen</Text>
        </Center>
    )
})
