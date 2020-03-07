import React, { Component } from "react"
import { Button, Text, TouchableOpacity, View, Alert } from 'react-native'
import { Divider } from 'react-native-elements'

import MapView, { Marker } from 'react-native-maps'

import styles from '../styles'

export default function CuttingEdgeNutritionScreen({ navigation: { navigate } }) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.locationTitle}>Cutting Edge Nutrition*</Text>
            <Divider style={{ marginTop:20, marginBottom:20 }} />
            <Text style={styles.locationText}>8282 Center Run Dr</Text>
            <Text style={styles.locationText}>Indianapolis, IN 46250</Text>
            <Text style={[styles.locationText, {color: 'blue'}]} onPress={()=>{Linking.openURL('tel:(317) 585-0605');}}>(317) 585-0605</Text>
            <Divider style={{ marginTop:20, marginBottom:20 }} />
            <Text style={styles.locationText}>Hours:</Text>
            <Text style={styles.locationText}>M-F: 11-6</Text>
            <Text style={styles.locationText}>Sat.: 10-4</Text>
            <Text style={styles.locationText}>Sun.: Closed</Text>
            <Text style={styles.locationText}>*select items available </Text>
        </View>
    )
}
