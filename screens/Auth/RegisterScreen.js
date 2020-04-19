import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { withTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { emailValidator, passwordValidator } from './../../core-module/_helpers'
import { navigationConstants } from './../../core-module/_constants'
import { AuthContext } from '../../core-module/_contexts'

import { Background } from './../../components/Background'
import { AuthLogo, Header } from './../../components/Auth'
import { TextInput } from './../../components/TextInput'
import { Button } from './../../components/Button'

export const RegisterScreen = withTheme(({ theme }) => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const { register } = useContext(AuthContext)
    const navigation = useNavigation()

    const _onSignUpPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        register({ email: email.value, password: password.value })
    }

    return (
        <Background>
            <AuthLogo />

            <Header>Create Account</Header>

            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>Sign Up</Button>

            <View style={styles.row}>
                <Text style={{ color: theme.colors.secondary }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationConstants.SCREENS.LOGIN)}>
                    <Text style={[styles.link, { color: theme.colors.primary }]}>Login</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
})


const styles = StyleSheet.create({
    button: {
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
    },
})
