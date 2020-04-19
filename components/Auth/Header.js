import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { withTheme } from 'react-native-paper'

export const Header = withTheme(({ theme, children }) => (
  <Text style={[styles.header, { color: theme.colors.primary }]}>{children}</Text>
))

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
})
