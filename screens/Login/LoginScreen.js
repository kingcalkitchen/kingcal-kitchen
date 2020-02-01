import React, { Component } from "react" 

import styles from "./style" 
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, AsyncStorage, KeyboardAvoidingView} from 'react-native' 
import { Button } from 'react-native-elements' 

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.loginScreenContainer}>

          <View style={styles.loginFormView}>

            <Text style={styles.logoText}>KingCal Kitchen</Text>

            <TextInput placeholder="Username" style={styles.loginFormTextInput} name="username" value={this.state.username} onChangeText={(text) => this.setState({username: text})} />
            <TextInput placeholder="Password" style={styles.loginFormTextInput} name="password" value={this.state.password} onChangeText={(text) => this.setState({password: text})} secureTextEntry={true}/>

            <Button buttonStyle={styles.loginButton} onPress={this._signInAsync} title="Login" />

          </View>

        </View>

      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    ) 
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}
