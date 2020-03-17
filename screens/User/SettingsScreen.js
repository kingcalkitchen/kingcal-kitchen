import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements' 

import Cart from '../../components/Cart'
import { MonoText } from '../../components/StyledText'

export default function SettingsScreen() {
  return (
    <View>
      <Header placement="left" leftComponent={{ icon: 'menu' }} centerComponent={{ text: 'KINGCAL KITCHEN' }} rightComponent={<Cart />} />
      <MonoText>Settings</MonoText>
    </View>
  )
}