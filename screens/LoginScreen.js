import React, { Component } from "react" 

import { connect } from 'react-redux'

import styles from './style'
import { userActions } from './../_actions'
import { store } from './../_helpers'
import { Text, View, TextInput, AsyncStorage, Alert } from 'react-native' 
import { Button } from 'react-native-elements' 

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
        
        <Button 
          title="Login"
          buttonStyle={styles.loginButton} 
          onPress={this._signInAsync}  
        />
        <Button
          title='Register'
          type="clear"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <Button
          title='Guest User'
          type="clear"
          onPress={this._signInAsGuestAsync}
        />
      </View>
    ) 
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  _signInAsync = async () => {
    const { username, password } = this.state
    //store.dispatch(userActions.getToken({ username, password }))

    await AsyncStorage.setItem('userToken', this.props.token);
    this.props.navigation.navigate('Main');
  }

  _signInAsGuestAsync = async () => {
    //store.dispatch(userActions.getToken({ '', '' }))

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

export default connect(mapStateToProps)(LoginScreen)
