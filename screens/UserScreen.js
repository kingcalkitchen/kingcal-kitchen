import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements' 

import Cart from './../components/Cart'
import { MonoText } from './../components/StyledText'

export default function UserScreen() {
  return (
    <View>
      <Header placement="left" leftComponent={{ icon: 'menu' }} centerComponent={{ text: 'KINGCAL KITCHEN' }} rightComponent={<Cart />} />
      <MonoText>User</MonoText>
    </View>
  )
}
