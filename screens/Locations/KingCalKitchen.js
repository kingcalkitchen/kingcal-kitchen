import React, { Component } from "react"
import { Button, Text, Linking, View, Alert } from 'react-native'
import { Divider } from 'react-native-elements'

import MapView, { Marker } from 'react-native-maps'

import styles from '../styles'

export default function KingCalKitchenScreen({ navigation: { navigate } }) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.locationTitle}>KingCal Kitchen</Text>
            <Divider style={{ marginTop:20, marginBottom:20 }} />
            <Text style={styles.locationText}>1315 S Rangeline Rd</Text>
            <Text style={styles.locationText}>Carmel, IN 46032</Text>
            <Text style={[styles.locationText, {color: 'blue'}]} onPress={()=>{Linking.openURL('tel:(317) 876-5432');}}>(317) 876-5432</Text>
            <Divider style={{ marginTop:20, marginBottom:20 }} />
            <Text style={styles.locationText}>Hours:</Text>
            <Text style={styles.locationText}>M-F: 10-7</Text>
            <Text style={styles.locationText}>Sat.: 10-7</Text>
            <Text style={styles.locationText}>Sun.: 10-7</Text>
        </View>
    )
}
