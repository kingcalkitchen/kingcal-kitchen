import * as React from "react"
import { connect } from 'react-redux'
import { Button, View, TextInput, TouchableOpacity, Image, Text } from 'react-native'

import { navigationConstants } from './../core-module/_constants'

import styles from './styles'

function LoginScreen(props) {
  const { navigation, signIn } = props
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('./../assets/kingcal-meals.png')} />

        <View style={styles.loginFormContainer}>
          <TextInput
            placeholder="Username"
            name="username"
            value={userName}
            onChangeText={setUserName}
            style={styles.loginFormTextInput}
          />
          <TextInput
            placeholder="Password"
            name="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.loginFormTextInput}
          />
        </View>

        <Button
          title="Login"
          color="#67994e"
          onPress={() => signIn({ username: userName, password: password })}
        />
        <Button
          title='Register'
          color="#67994e"
          onPress={() => navigation.navigate(navigationConstants.SIGN_UP)}
        />
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => {
  const { token } = state.user

  return {
    token,
  }
}

const connectedApp = connect(mapStateToProps)(LoginScreen)
export { connectedApp as LoginScreen }
