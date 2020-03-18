import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import styles from './styles'

const SearchScreen = props => {
    return (
        <><Text>This is the Search screen.</Text></>
    )
}

SearchScreen.navigationOptions = screenProps => ({
    //title: screenProps.navigation.getParam("yourParam")
})

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(SearchScreen)
export { connectedApp as SearchScreen }
