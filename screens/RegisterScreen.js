import * as React from "react"
import { Button, View, TextInput, AsyncStorage, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function RegisterScreen(props) {
  const [userName, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('./../assets/kingcal-meals.png')} />

        <TextInput
          placeholder="Username"
          name="username"
          value={userName}
          onChangeText={(text) => setUsername(text)}
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
          //onPress={this._registerAsync} 
          title="Register"
        />

        <Button
          title='Sign In'
          color="#67994e"
          onPress={() => props.navigation.navigate('SignIn')}
        />
      </TouchableOpacity>
    </View>
  )

  // _registerAsync = async () => {
  //   const { userName, password, confirmPassword } = this.state
  //   //store.dispatch(userActions.getToken({ userName, password }))

  //   await AsyncStorage.setItem('userToken', this.props.token);
  //   this.props.navigation.navigate('Main');
  // }

  // handleInput = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
}

// const mapStateToProps = state => {
//   const { loading, token } = state.user

//   return {
//     loading,
//     token,
//   }
// }

// export default connect(mapStateToProps)(RegisterScreen)
