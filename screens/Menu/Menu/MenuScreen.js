import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import styles from './styles'

const MenuScreen = props => {
    return (
        <><Text>This is the Menu screen.</Text></>
    )
}

MenuScreen.navigationOptions = screenProps => ({
    //title: screenProps.navigation.getParam("yourParam")
})

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(MenuScreen)
export { connectedApp as MenuScreen }
