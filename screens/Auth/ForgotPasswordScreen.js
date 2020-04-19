import React, { useState, useContext } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { emailValidator, passwordValidator } from './../../core-module/_helpers'
import { navigationConstants } from './../../core-module/_constants'
import { AuthContext } from '../../core-module/_contexts'

import { Background } from './../../components/Background'
import { AuthLogo, Header } from './../../components/Auth'
import { TextInput } from './../../components/TextInput'
import { Button } from './../../components/Button'

export const ForgotPasswordScreen = withTheme(({ theme }) => {
    const [email, setEmail] = useState({ value: '', error: '' })

    const { forgotPassword } = useContext(AuthContext)
    const navigation = useNavigation()

    const _onSendPressed = () => {
        const emailError = emailValidator(email.value)

        if (emailError) {
            setEmail({ ...email, error: emailError })
            return
        }
        forgotPassword({ email })
    }

    return (
        <Background>
            <AuthLogo />

            <Header>Restore Password</Header>

            <TextInput
                label="E-mail address"
                returnKeyType="done"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <Button mode="contained" onPress={_onSendPressed} style={styles.button}>Send Reset Instructions</Button>

            <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate(navigationConstants.SCREENS.LOGIN)}
            >
                <Text style={[styles.label, { color: theme.colors.secondary }]}>← Back to login</Text>
            </TouchableOpacity>
        </Background>
    )
})

const styles = StyleSheet.create({
    back: {
        width: '100%',
        marginTop: 12,
    },
    button: {
        marginTop: 12,
    },
    label: {
        width: '100%',
    },
})
