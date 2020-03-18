import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MenuButton from './../../../components/MenuButton/MenuButton'

import styles from './styles'

const DrawerContainer = props => {
    const navigation = useNavigation()

    return (
        <View style={styles.content}>
            <View style={styles.container}>
                <MenuButton
                    title="MENU"
                    source={require('./../../../core-module/_assets/icons/home.png')}
                    onPress={() => {
                        navigation.navigate('Menu')
                        navigation.closeDrawer()
                    }}
                />
                <MenuButton
                    title="CATEGORIES"
                    source={require('./../../../core-module/_assets/icons/category.png')}
                    onPress={() => {
                        navigation.navigate('Categories')
                        navigation.closeDrawer()
                    }}
                />
                <MenuButton
                    title="SEARCH"
                    source={require('./../../../core-module/_assets/icons/search.png')}
                    onPress={() => {
                        navigation.navigate('Search')
                        navigation.closeDrawer()
                    }}
                />
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(DrawerContainer)
export { connectedApp as DrawerContainer }
