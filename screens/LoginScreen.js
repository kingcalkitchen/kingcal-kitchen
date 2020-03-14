import * as React from "react"
import { connect } from 'react-redux'
import { Button, View, TextInput, Image } from 'react-native'

import { navigationConstants } from './../core-module/_constants'

import styles from './styles'

const LoginScreen = props => {
  const { navigation, signIn } = props
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/kingcal-meals.png')} />

      <View style={styles.loginFormContainer}>
        <TextInput
          placeholder="Email"
          name="email"
          value={email}
          onChangeText={setEmail}
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
        onPress={() => signIn({ email: email, password: password })}
      />
      <Button
        title='Register'
        color="#67994e"
        onPress={() => navigation.navigate(navigationConstants.SIGN_UP)}
      />
    </View>
  )
}

const mapStateToProps = state => {
  return {}
}

const connectedApp = connect(mapStateToProps)(LoginScreen)
export { connectedApp as LoginScreen }
