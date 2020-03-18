import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import styles from './styles'

const CategoriesScreen = props => {
    return (
        <><Text>This is the Categories screen.</Text></>
    )
}

CategoriesScreen.navigationOptions = screenProps => ({
    //title: screenProps.navigation.getParam("yourParam")
})

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(CategoriesScreen)
export { connectedApp as CategoriesScreen }
