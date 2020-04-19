import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

export const Logo = props => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('./../../core-module/_assets/logo.png')} style={{ width: 70, height: 35 }} />
        </TouchableOpacity>
    )
}
