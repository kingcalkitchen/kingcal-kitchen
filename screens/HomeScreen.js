import React from "react"
import { connect } from 'react-redux'
import { Button, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const HomeScreen = props => {
  const { signOut, current, token } = props

  const renderUserData = () => {
    return (
      <>
        {
          current && current.email &&
          <>
            <Text>{current.firstName}</Text>
            <Text>{current.middleName}</Text>
            <Text>{current.lastName}</Text>
            <Text>{current.email}</Text>
            <Text>{current.roles.map((role, idx) => <Text key={idx}>{role}</Text>)}</Text>
          </>
        }
      </>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 20, padding: 20 }}>
        <Text style={styles.locationTitle}>This is the Home Screen</Text>
      </View>

      <Button onPress={() => signOut()} title="Log Out" />

      <View style={{ margin: 20, padding: 20 }}>
        <Text style={styles.locationTitle}>Access Token</Text>
        <Text>{token}</Text>
      </View>

      <View style={{ margin: 20, padding: 20 }}>
        <Text style={styles.locationTitle}>User</Text>
        {renderUserData()}
      </View>


    </View>
  )
}

const mapStateToProps = state => {
  const { token, current } = state.user

  return {
    token,
    current,
  }
}

const connectedApp = connect(mapStateToProps)(HomeScreen)
export { connectedApp as HomeScreen }