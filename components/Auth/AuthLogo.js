import React from 'react'
import { Image, StyleSheet } from 'react-native'

export const AuthLogo = () => (
  <Image source={require('./../../core-module/_assets/kingcal-meals.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 128,
    marginBottom: 12,
  },
})