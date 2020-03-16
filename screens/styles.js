import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
    },
    text: {
        fontSize: 25,
    },
    smallText: {
        fontSize: 15,
    },
    divider: { 
        marginTop: 20, 
        marginBottom: 20 
    },
    loginFormContainer: {
        marginTop: 30,
    },
    loginFormTextInput: {
        width: 300,
        fontSize: 30,
        borderWidth: 1,
        borderColor: '#eaeaea',
        margin: 15,
        padding: 10,
    },
    hamburgerMenu: {
        color: "#67994e",
    },
})

export default styles
