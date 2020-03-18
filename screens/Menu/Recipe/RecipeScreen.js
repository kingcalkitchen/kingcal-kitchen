import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import styles from './styles'

const RecipeScreen = props => {
    return (
        <><Text>This is the Recipe screen.</Text></>
    )
}

RecipeScreen.navigationOptions = screenProps => ({
    //title: screenProps.navigation.getParam("yourParam")
})

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(RecipeScreen)
export { connectedApp as RecipeScreen }
