import * as React from "react"
import { connect } from 'react-redux'
import { Button, View, TextInput, Image } from 'react-native'

import { navigationConstants } from './../core-module/_constants'

import styles from './styles'

const RegisterScreen = props => {
  const { navigation, register } = props

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/kingcal-meals.png')} />

      <TextInput
        placeholder="Email"
        name="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.loginFormTextInput}
      />
      <TextInput
        placeholder="Password"
        name="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        style={styles.loginFormTextInput}
      />
      <TextInput
        placeholder="Confirm Password"
        name="confirm-password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
        style={styles.loginFormTextInput}
      />
      <Button
        color="#67994e"
        onPress={() => register({ email: email, password: password })}
        title="Register"
      />

      <Button
        title='Sign In'
        color="#67994e"
        onPress={() => navigation.navigate(navigationConstants.SIGN_IN)}
      />
    </View>
  )
}

const mapStateToProps = state => {
  return {}
}

const connectedApp = connect(mapStateToProps)(RegisterScreen)
export { connectedApp as RegisterScreen }