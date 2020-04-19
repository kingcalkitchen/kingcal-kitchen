import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-paper'

import { Center } from './../../components/Center'

const UsersScreen = withTheme(props => {
    return (
        <Center>
            <Text>Admin Users</Text>
        </Center>
    )
})
