import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-paper'

import { Center } from './../../components/Center'

export const FeedScreen = withTheme(props => {
    return (
        <Center>
            <Text>Feed</Text>
        </Center>
    )
})
