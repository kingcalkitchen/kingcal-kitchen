import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import styles from './styles'

const IngredientScreen = props => {
    return (
        <><Text>This is the Ingredient screen.</Text></>
    )
}

IngredientScreen.navigationOptions = screenProps => ({
    //title: screenProps.navigation.getParam("yourParam")
})

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(IngredientScreen)
export { connectedApp as IngredientScreen }
