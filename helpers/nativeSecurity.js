import { AsyncStorage } from 'react-native'

import { userConstants } from '../core-module/_constants'
import { userActions } from '../core-module/_actions'
import { store } from '../core-module/_helpers'

export const nativeSecurity = {
    _signInAsync,
    _signOutAsync,
    _registerAsync,
}

const setStorage = async (token, actions) => {
    actions.setToken(token)
    actions.setIsSignout(false)
    actions.setUserLoggingIn(false)
    await AsyncStorage.setItem(userConstants.USER_TOKEN, token)
}
function _signInAsync(credentials, actions) {
    actions.setUserLoggingIn(true)
    store.dispatch(userActions.getToken(credentials, token => {
        setStorage(token, actions)
    }))
}

const removeStorage = async actions => {
    actions.setToken(null)
    actions.setIsSignout(true)
    await AsyncStorage.removeItem(userConstants.USER_TOKEN)
}
function _signOutAsync(actions) {
    store.dispatch(userActions.removeToken(() => {
        removeStorage(actions)
    }))
}

function _registerAsync(user, actions) {
    store.dispatch(userActions.register(user, () => {
        _signInAsync(user, actions)
    }))
}
