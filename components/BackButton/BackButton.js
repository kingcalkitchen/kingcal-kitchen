import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const BackButton = ({ goBack }) => (
    <TouchableOpacity onPress={goBack} style={styles.container}>
        <Image style={styles.image} source={require('./../../core-module/_assets/arrow_back.png')} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10 + getStatusBarHeight(),
        left: 10,
    },
    image: {
        width: 24,
        height: 24,
    },
})
