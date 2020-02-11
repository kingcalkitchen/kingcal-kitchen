//import * as WebBrowser from 'expo-web-browser' 
import React, { Component } from "react" 
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native'
import { Button, Header } from 'react-native-elements' 

import { connect } from 'react-redux'

import { MonoText } from './../components/StyledText'

import Cart from './../components/Cart'

import styles from './style'

class HomeScreen extends Component {
  render() {
    return (
      <View>
          <Header placement="left" leftComponent={{ icon: 'menu' }} centerComponent={{ text: 'KINGCAL KITCHEN' }} rightComponent={<Cart />} />

          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
  
          <View style={styles.getStartedContainer}>
            <DevelopmentModeNotice />
  
            <Text style={styles.getStartedText}>Get started by opening</Text>
  
            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText>screens/HomeScreen.js</MonoText>
            </View>
  
            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>
  
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
  
              <Button
                onPress={this._signOutAsync}
                title="Log Out"
              />
            </TouchableOpacity>
          </View>
  
        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>
  
          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View> */}
      </View>
    )
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear() 
    this.props.navigation.navigate('Auth') 
  }
}

HomeScreen.navigationOptions = {
  header: null,
} 

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    ) 

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    ) 
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    ) 
  }
}

function handleLearnMorePress() {
  // WebBrowser.openBrowserAsync(
  //   'https://docs.expo.io/versions/latest/workflow/development-mode/'
  // ) 
}

function handleHelpPress() {
  // WebBrowser.openBrowserAsync(
  //   'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  // ) 
}

const mapStateToProps = state => {
  const { loading, token } = state.user

  return {
    loading,
    token,
  }
}

export default connect(mapStateToProps)(HomeScreen)