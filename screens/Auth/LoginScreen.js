import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { withTheme, IconButton, Divider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { emailValidator, passwordValidator } from './../../core-module/_helpers/utils'
import { navigationConstants } from './../../core-module/_constants'
import { AuthContext } from '../../core-module/_contexts'

import { Background } from './../../components/Background'
import { AuthLogo } from './../../components/Auth'
import { TextInput } from './../../components/TextInput'
import { Button } from './../../components/Button'
import { Biometrics } from './../../components/Auth'

export const LoginScreen = withTheme(({ theme }) => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const { login, loginGoogle, loginFacebook } = useContext(AuthContext)
    const navigation = useNavigation()

    const _onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        login({ email: email.value, password: password.value })
    }

    return (
        <Background>
            <AuthLogo />

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

            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationConstants.SCREENS.FORGOT_PASSWORD)}
                >
                    <Text style={{ color: theme.colors.secondary }}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <Button mode="contained" onPress={_onLoginPressed}>Login</Button>

            <View style={styles.row}>
                <Text style={{ color: theme.colors.secondary }}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationConstants.SCREENS.REGISTER)}>
                    <Text style={[styles.link, { color: theme.colors.primary }]}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <Divider style={{ margin: 10, width: '100%' }} />

            <View style={styles.row}>
                <Text style={{ color: theme.colors.secondary }}>Or sign in with one of these</Text>
            </View>

            <View style={styles.row}>
                <IconButton icon="google" size={30} onPress={loginGoogle} />
                <IconButton icon="facebook" size={30} onPress={loginFacebook} />
            </View>

            <View style={styles.row}><Biometrics /></View>
        </Background>
    )
})

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
    },
})
