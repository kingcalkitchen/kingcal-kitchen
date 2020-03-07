import React, { Component } from "react"
import { Button, Text, TouchableOpacity, View } from 'react-native'

import { Context } from './../core-modules/_helpers'

import styles from './styles'

export default function HomeScreen(props) {
  const { signOut } = React.useContext(Context)

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>This is the Home Screen</Text>

        <Button onPress={signOut} title="Log Out" />

      </TouchableOpacity>
    </View>
  )
}
