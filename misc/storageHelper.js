import { AsyncStorage } from 'react-native'
import { userConstants } from './../core-module/_constants'

export const getUserStorageAsync = async (setValues) => {
    return AsyncStorage.getItem(userConstants.USER_TOKEN)
        .then(token => { if (token) setValues(token) })
        .catch(error => reject(error))
}

export const setUserStorageAsync = async token => {
    try {
        await AsyncStorage.setItem(userConstants.USER_TOKEN, token ? token : '')
    } catch (e) {
        console.warn(e)
    }
}

export const removeUserStorageAsync = async () => {
    try {
        await AsyncStorage.removeItem(userConstants.USER_TOKEN)
    } catch (e) {
        console.warn(e)
    }
}