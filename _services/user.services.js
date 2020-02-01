import { config, handleResponse, handleError } from './../_helpers'

export const userService = {
    getToken,
}

function getToken(credentials) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    }

    return fetch(`${config.apiURL}/api/Users/Authenticate`, requestOptions)
        .then(handleResponse, handleError)
}
