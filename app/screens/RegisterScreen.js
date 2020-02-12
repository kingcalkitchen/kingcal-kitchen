import React, { Component } from "react" 

import { connect } from 'react-redux'

import styles from './style'
import { userActions } from './../core-module/_actions'
import { store } from './../core-module/_helpers'
import { Text, View, TextInput, AsyncStorage, Alert } from 'react-native' 
import { Button } from 'react-native-elements' 

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  render() {
    return (
      <View style={styles.loginFormView}>
        <Text style={styles.logoText}>KingCal Kitchen</Text>
        <TextInput 
          placeholder="Username" 
          style={styles.loginFormTextInput} 
          name="username" 
          value={this.state.username} 
          onChangeText={(text) => this.setState({username: text})} 
        />
        <TextInput 
          placeholder="Password" 
          style={styles.loginFormTextInput} 
          name="password" 
          value={this.state.password} 
          onChangeText={(text) => this.setState({password: text})} 
          secureTextEntry={true}
        />
        <TextInput 
          placeholder="Confirm Password" 
          style={styles.loginFormTextInput} 
          name="confirmPassword" 
          value={this.state.confirmPassword} 
          onChangeText={(text) => this.setState({confirmPassword: text})} 
          secureTextEntry={true}
        />
        <Button buttonStyle={styles.loginButton} onPress={this._registerAsync} title="Register" />

        <Button
          title='Sign In'
          type="clear"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    ) 
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  _registerAsync = async () => {
    const { userName, password, confirmPassword } = this.state
    //store.dispatch(userActions.getToken({ userName, password }))

    await AsyncStorage.setItem('userToken', this.props.token);
    this.props.navigation.navigate('Main');
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}

const mapStateToProps = state => {
  const { loading, token } = state.user

  return {
    loading,
    token,
  }
}

export default connect(mapStateToProps)(RegisterScreen)
