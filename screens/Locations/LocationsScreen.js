import React, { useState } from 'react'
import { Linking } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Modal, Portal, Surface, Text, Divider, Caption } from 'react-native-paper'
import { withTheme } from 'react-native-paper'

import { Header } from './../../components/Auth'
import { markers } from './../../data/locationsDataArray'

export const LocationsScreen = withTheme(props => {
    const [modalVisible, setModalVisible] = useState(false)
    const [location, setLocation] = useState(null)

    const showLocationDetails = marker => {
        setLocation(marker ?? null)
        setModalVisible(!modalVisible)
    }

    const renderTitle = () => {
        return (
            <Header>
                <Text style={{ textDecorationLine: 'underline' }}>
                    {location?.params.title}
                </Text>
                {
                    location?.params.options &&
                    <Text>*</Text>
                }
            </Header>
        )
    }

    const renderAddress = () => {
        return (
            <>
                <Text>
                    <Text >{location?.params.address.street1}{'\n'}</Text>
                    {location?.params.address.street2 && <Text>{location?.params.address.street2}{'\n'}</Text>}
                    <Text>{location?.params.address.city},&nbsp;{location?.params.address.state}&nbsp;{location?.params.address.zip}</Text>
                </Text>
            </>
        )
    }

    const renderHours = () => {
        const hours = location?.params.hours

        return (
            <>
                <Text>
                    <Text style={{ textDecorationLine: 'underline' }}>Hours:{'\n'}</Text>
                    {hours && Object.keys(hours).map((day, idx) => <Text key={idx}>{day}&nbsp;:&nbsp;{hours[day]}{'\n'}</Text>)}
                </Text>
            </>
        )
    }

    const initialRegion = { latitude: 39.7684, longitude: -86.1581, latitudeDelta: .4, longitudeDelta: .4 }

    const renderMarkers = markers.map((marker, idx) => {
        return <Marker key={idx} coordinate={marker.coordinate} onPress={() => showLocationDetails(marker)} />
    })

    return (
        <>
            <Portal>
                <Modal visible={modalVisible} onDismiss={() => showLocationDetails()}>
                    <Surface style={{ padding: 20, margin: 10 }}>
                        {renderTitle()}
                        {renderAddress()}
                        <Text style={{ color: 'blue' }} onPress={() => { Linking.openURL(`tel:${location?.params.phone}`) }}>{location?.params.phone}</Text>
                        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                        {renderHours()}
                        {
                            location?.params.options &&
                            <>
                                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                                <Caption>*{location?.params.options.text}</Caption>
                            </>
                        }
                    </Surface>
                </Modal>
            </Portal>
            <MapView style={{ flex: 1 }} initialRegion={initialRegion} showsUserLocation={true} >
                {renderMarkers}
            </MapView>
        </>
    )
})
