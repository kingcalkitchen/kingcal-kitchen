import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-paper'

import { Center } from './../../components/Center'

export const SystemAdminScreen = withTheme(props => {
    return (
        <Center>
            <Text>System Admin</Text>
        </Center>
    )
})
