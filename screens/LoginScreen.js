import * as React from "react"
import { Button, View, TextInput, AsyncStorage, TouchableOpacity, Image } from 'react-native'

import { Context } from './../core-module/_helpers'

import styles from './styles'

function LoginScreen(props) {
  const [userName, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signIn } = React.useContext(Context)

  return (
    // <AuthContext.Consumer>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('./../assets/kingcal-meals.png')} />

          <View style={styles.loginFormContainer}>
            <TextInput
              placeholder="Username"
              name="username"
              value={userName}
              onChangeText={setUsername}
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
            onPress={() => signIn({ userName, password })}
          />
          <Button
            title='Register'
            color="#67994e"
            onPress={() => props.navigation.navigate('SignUp')}
          />
        </TouchableOpacity>
      </View>
    // </AuthContext.Consumer>
  )

  // _signInAsync = async () => {
  //   const { username, password } = this.state
  //   //store.dispatch(userActions.getToken({ username, password }))

  //   await AsyncStorage.setItem('userToken', this.props.token);
  //   this.props.navigation.navigate('Main');
  // }

  // _signInAsGuestAsync = async () => {
  //   //store.dispatch(userActions.getToken({ '', '' }))

  //   await AsyncStorage.setItem('userToken', this.props.token);
  //   this.props.navigation.navigate('Main');
  // }

  // handleInput = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
}

//LoginScreen.navigationOptions = { headerShown:false }

export default LoginScreen