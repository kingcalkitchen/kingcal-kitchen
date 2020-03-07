import * as React from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'

export default function AuthLoadingScreen(props) {

  React.useEffect(async () => {
    const userToken = await AsyncStorage.getItem('userToken')

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    props.navigation.navigate(userToken ? 'Home' : 'SignIn')
  }, [])

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  )
}