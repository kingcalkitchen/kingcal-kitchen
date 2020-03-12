import React, { Component } from "react"
import { connect } from 'react-redux'
import { Button, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const HomeScreen = props => {
  const { signOut } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>This is the Home Screen</Text>

        <Text>{props.token}</Text>

        <Button onPress={() => signOut()} title="Log Out" />

      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => {
  const { token } = state.user

  return {
    token,
  }
}

const connectedApp = connect(mapStateToProps)(HomeScreen)
export { connectedApp as HomeScreen }