import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import { withTheme, Button as PaperButton } from 'react-native-paper'

export const Button = withTheme(({ theme, mode, style, children, ...props }) => (
    <PaperButton
        style={[
            styles.button,
            mode === 'outlined' && { backgroundColor: theme.colors.surface },
            style,
        ]}
        labelStyle={styles.text}
        mode={mode}
        {...props}
    >
        {children}
    </PaperButton>
))

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
})