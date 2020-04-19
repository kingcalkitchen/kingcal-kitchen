import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-paper'

import { Center } from './../../components/Center'

export const MenuScreen = withTheme(props => {
    return (
        <Center>
            <Text>Admin Menu</Text>
        </Center>
    )
})