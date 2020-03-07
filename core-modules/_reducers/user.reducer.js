import { userConstants } from './../_constants'

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
}

export function user(prevState = initialState, action) {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return { ...prevState, userToken: action.token, isLoading: false }
      case 'SIGN_IN':
        return { ...prevState, isSignout: false, userToken: action.token }
      case 'SIGN_OUT':
        return { ...prevState, isSignout: true, userToken: null }
      default:
        return prevState
    }
  }
