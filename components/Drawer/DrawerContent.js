import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    withTheme,
} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../core-module/_contexts'

export const DrawerContent = withTheme(props => {
    const { user, logout } = useContext(AuthContext)
    const navigation = useNavigation()

    const renderAvatar = () => {
        if (!user) return null

        return user.photoUrl ?
            <Avatar.Image size={50} source={{ uri: user.photoUrl }} /> :
            user.firstName || user.lastName ?
                <Avatar.Text size={50} label={`${user.lastName.charAt(0)}${user.firstName.charAt(0)}`} /> :
                <Avatar.Icon size={50} icon="emoticon-outline" />
    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    {renderAvatar()}
                    <Title style={styles.title}>{user && user.firstName ? user.firstName : ''}&nbsp;{user && user.lastName ? user.lastName : ''}</Title>
                    {/* <Caption style={styles.caption}>@trensik</Caption> */}
                    {/* <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>202</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>159</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View> */}
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => {
                            navigation.navigate('User')
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="tune" color={color} size={size} />
                        )}
                        label="Admin"
                        onPress={() => {
                            navigation.navigate('Admin')
                        }}
                    />
                    {user && user.roles == 'system-admin' ? <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="tune" color={color} size={size} />
                        )}
                        label="System Admin"
                        onPress={() => {
                            navigation.navigate('SystemAdmin')
                        }}
                    /> : null}
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="logout-variant" color={color} size={size} />
                        )}
                        label="Log Out"
                        onPress={() => {
                            logout()
                        }}
                    />
                </Drawer.Section>
                {/* <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={false} />
                            </View>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.preference}>
                            <Text>RTL</Text>
                            <View pointerEvents="none">
                                <Switch value={false} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section> */}
            </View>
        </DrawerContentScrollView>
    )
})

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})
