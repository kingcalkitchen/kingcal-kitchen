import React from "react"
import { connect } from 'react-redux'
import { Text, View, Linking } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from '../styles'

const LocationDetail = props => {
    const navigation = useNavigation()
    const route = useRoute()

    const { title, address, phone, hours, options } = route.params

    const renderTitle = () => {
        return (
            <>
                <Text style={[styles.title, { textDecorationLine: 'underline', }]}>
                    <Text>{title}</Text>{options && <Text>*</Text>}
                </Text>
            </>
        )
    }

    const renderAddress = () => {
        return (
            <>
                <Text style={styles.text}>
                    <Text >{address.street1}{'\n'}</Text>
                    {address.street2 && <Text>{address.street2}{'\n'}</Text>}
                    <Text>{address.city},&nbsp;{address.state}&nbsp;{address.zip}</Text>
                </Text>
            </>
        )
    }

    const renderHours = () => {
        return (
            <>
                <Text style={styles.text}>
                    <Text>Hours:{'\n'}</Text>
                    {hours && Object.keys(hours).map((day, idx) => <Text key={idx}>{day}&nbsp;:&nbsp;{hours[day]}{'\n'}</Text>)}
                </Text>
            </>
        )
    }

    return (
        <View style={[styles.container, { padding: 20 }]}>
            {renderTitle()}
            {renderAddress()}
            <Text style={[styles.text, { color: 'blue' }]} onPress={() => { Linking.openURL(`tel:${phone}`) }}>{phone}</Text>
            <Divider style={styles.divider} />
            {renderHours()}
            <Divider style={styles.divider} />
            {options && <Text style={styles.smallText}>*{options.text}</Text>}
        </View>
    )
}

const mapStateToProps = state => {
    return {}
}

const connectedApp = connect(mapStateToProps)(LocationDetail)
export { connectedApp as LocationDetail }

