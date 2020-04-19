import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { withTheme, TextInput as Input } from 'react-native-paper'

export const TextInput = withTheme(({ theme, errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={{ backgroundColor: theme.colors.surface }}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={[styles.error, { color: theme.colors.error }]}>{errorText}</Text> : null}
  </View>
))

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  error: {
    fontSize: 14,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
})