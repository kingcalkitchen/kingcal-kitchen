import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-paper'

import { Center } from './../../../components/Center'

export const SearchScreen = withTheme(props => {
    return (
        <Center>
            <Text>Search</Text>
        </Center>
    )
})
