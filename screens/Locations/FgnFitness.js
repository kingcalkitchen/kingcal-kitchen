import React, { Component } from "react"
import { Button, Text, TouchableOpacity, View, Alert } from 'react-native'
import { Divider } from 'react-native-elements'

import MapView, { Marker } from 'react-native-maps'

import styles from '../styles'

export default function FgnFitnessScreen({ navigation: { navigate } }) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.locationTitle}>FGN Fitness*</Text>
            <Divider style={{ marginTop:20, marginBottom:20 }} />
            <Text style={styles.locationText}>1628 Bates St.</Text>
            <Text style={styles.locationText}>Indianapolis, IN 46201</Text>
            <Text style={[styles.locationText, {color: 'blue'}]} onPress={()=>{Linking.openURL('tel:(317) 342-2194');}}>(317) 342-2194</Text>
            <Divider style={{ marginTop:20, marginBottom:20 }} />
            <Text style={styles.locationText}>Hours:</Text>
            <Text style={styles.locationText}>M-F: 5-9</Text>
            <Text style={styles.locationText}>Sat.: 7-7</Text>
            <Text style={styles.locationText}>Sun.: 7-7</Text>
            <Text style={styles.locationText}>*select items available </Text>
        </View>
    )
}
