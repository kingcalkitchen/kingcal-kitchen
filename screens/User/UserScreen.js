import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-paper'

import { Center } from './../../components/Center'

export const UserScreen = withTheme(props => {
    return (
        <Center>
            <Text>User</Text>
        </Center>
    )
})
