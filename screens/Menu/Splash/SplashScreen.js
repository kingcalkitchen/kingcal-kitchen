import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import styles from './styles'

const SplashScreen = props => {
    return (
        <><Text>This is the Splash screen.</Text></>
    )
}

SplashScreen.navigationOptions = screenProps => ({
    //title: screenProps.navigation.getParam("yourParam")
})

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(SplashScreen)
export { connectedApp as SplashScreen }
