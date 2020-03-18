import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import styles from './styles'

const RecipesListScreen = props => {
    return (
        <><Text>This is the Recipe List screen.</Text></>
    )
}

RecipesListScreen.navigationOptions = screenProps => ({
    //title: screenProps.navigation.getParam("yourParam")
})

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(RecipesListScreen)
export { connectedApp as RecipesListScreen }
