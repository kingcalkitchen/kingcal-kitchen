import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { withTheme } from 'react-native-paper'

import { AuthContext } from '../../core-module/_contexts'

import { Background } from './../../components/Background'

export const HomeScreen = withTheme(props => {
    const { user, token } = useContext(AuthContext)

    const renderUserData = () => {
        return (
            <>
                {
                    user && user.email &&
                    <>
                        <Text>{user?.firstName}</Text>
                        <Text>{user?.middleName}</Text>
                        <Text>{user?.lastName}</Text>
                        <Text>{user?.email}</Text>
                        <Text>{user.roles && user.roles.map((role, idx) => <Text key={idx}>{role}</Text>)}</Text>
                    </>
                }
            </>
        )
    }

    return (
        <Background>
            <View style={{ margin: 20, padding: 20 }}>
                <Text>This is the Home Screen</Text>
            </View>

            <View style={{ margin: 20, padding: 20 }}>
                <Text>Access Token</Text>
                <Text>{token}</Text>
            </View>

            <View style={{ margin: 20, padding: 20 }}>
                <Text>User</Text>
                <Text>{renderUserData()}</Text>
            </View>
        </Background>
    )
})

