import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { withTheme } from 'react-native-paper'

export const Paragraph = withTheme(({ theme, children }) => (
  <Text style={[styles.text, { color: theme.colors.secondary }]}>{children}</Text>
))

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 14,
  },
})