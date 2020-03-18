import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import styles from './styles'

const IngredientsDetailsScreen = props => {
    return (
        <><Text>This is the Ingredients Details screen.</Text></>
    )
}

IngredientsDetailsScreen.navigationOptions = screenProps => ({
    //title: screenProps.navigation.getParam("yourParam")
})

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(IngredientsDetailsScreen)
export { connectedApp as IngredientsDetailsScreen }
