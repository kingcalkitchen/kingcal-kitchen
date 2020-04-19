import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../core-module/_contexts'

import { Appbar, Avatar, withTheme } from 'react-native-paper'
import { Logo } from './../../components/Logo'

export const HeaderContent = withTheme(props => {
  const { theme, scene, previous } = props
  const navigation = useNavigation()
  const { user } = useContext(AuthContext)

  const renderAvatar = () => {
    if (!user) return null

    return user.photoUrl ?
      <Avatar.Image size={40} source={{ uri: user.photoUrl }} /> :
      user.firstName || user.lastName ?
        <Avatar.Text size={40} label={`${user.lastName.charAt(0)}${user.firstName.charAt(0)}`} /> :
        <Avatar.Icon size={40} icon="emoticon-outline" />
  }

  const { options } = scene.descriptor
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
        ? options.title
        : scene.route.name

  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          color={theme.colors.primary}
        />
      ) : (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            {renderAvatar()}
          </TouchableOpacity>
        )}
      <Appbar.Content
        title={
          previous ? title : <Logo navigation={navigation} />
        }
      />
    </Appbar.Header>
  )
})
