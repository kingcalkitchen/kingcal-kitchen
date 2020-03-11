import React, { Component } from "react"
import { Button, Text, TouchableOpacity, View, Alert } from 'react-native'
import { navigationConstants } from './../../core-module/_constants/navigation.constants'

import MapView, { Marker } from 'react-native-maps'

import styles from '../styles'

// TODO
// this needs to be DB call

export default function LocationsScreen({ navigation }) {
  const markers = [
    {
      navigate: navigationConstants.KINGCAL_KITCHEN,
      coordinate: { latitude: 39.960350, longitude: -86.126210 },
    },
    {
      navigate: navigationConstants.CUTTING_EDGE_NUTRITION,
      coordinate: { latitude: 39.909010, longitude: -86.057670 },
    },
    {
      navigate: navigationConstants.FGN_FITNESS,
      coordinate: { latitude: 39.762250, longitude: -86.131320 },
    },
  ]

  const initialRegion = { latitude: 39.7684, longitude: -86.1581, latitudeDelta: .4, longitudeDelta: 0.4 }

  const renderMarkers = markers.map((marker, idx) => <Marker key={idx} coordinate={marker.coordinate} onPress={() => navigation.navigate(marker.navigate)} />)

  return (
    <MapView style={{ flex: 1 }} initialRegion={initialRegion} showsUserLocation={true} >
      { renderMarkers }
    </MapView>
  )
}
