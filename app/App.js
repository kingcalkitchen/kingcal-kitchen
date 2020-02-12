import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import AppNavigator from './navigation/AppNavigator'

import { store } from './core-module/_helpers'
import styles from './screens/style'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingComplete: false,
    }
  }
  
  render() {
    if (!this.state.loadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
            startAsync={loadResourcesAsync}
            onError={handleLoadingError}
            onFinish={() => this.setState({ loadingComplete: true })}
          />
      )
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <AppNavigator theme="dark" />
          </View>
        </Provider>
      )
    }
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ])
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error)
}
