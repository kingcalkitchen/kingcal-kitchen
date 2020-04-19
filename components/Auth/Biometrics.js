import React, { useState, useEffect, useContext } from 'react'
import { TouchableHighlight } from 'react-native'
import { withTheme, Text } from 'react-native-paper'
import * as LocalAuthentication from 'expo-local-authentication'

import { AuthContext } from './../../core-module/_contexts'

export const Biometrics = withTheme(props => {
  const [enrolled, setEnrolled] = useState(false)
  const [biometryType, setBiometryType] = useState(null)

  const { loginOs } = useContext(AuthContext)

  useEffect(() => {
    async function establishAuthenticationType() {
      let type = null
      const result = await LocalAuthentication.supportedAuthenticationTypesAsync()
      if (result) {
        if (result.includes(1)) type = 'fingerprint'
        if (result.includes(2)) type = 'facial recognition'
      }
      setBiometryType(type)
    }

    async function establishIsEnrolled() {
      const enrolledResult = await LocalAuthentication.isEnrolledAsync()
      if (enrolledResult) setEnrolled(enrolledResult)
    }

    establishAuthenticationType()
    establishIsEnrolled()
  }, [])

  const authenticate = async () => {
    try {
      const results = await LocalAuthentication.authenticateAsync()
      if (results.success) {
        loginOs(results)
      } else {
        console.log(results)
      }
    } catch (error) {
      // TODO
      // display on snackbar
      console.log(error)
    }
  }

  return (
    <>
      {biometryType && enrolled &&
        <TouchableHighlight onPress={authenticate} activeOpacity={1}>
          <Text style={{ color: props.theme.colors.primary }}>
            {`Authenticate with ${biometryType}`}
          </Text>
        </TouchableHighlight>}
    </>
  )
})
