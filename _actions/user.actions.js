import { userConstants } from './../constants'
import { userService } from './../_services'

export const userActions = {
    getToken,
}

function getToken(credentials) {

    return dispatch => {

        dispatch(request())

        userService.getToken(credentials)
            .then(
                response => {
                    dispatch(success(response.accessToken))
                },
                error => {
                    dispatch(failure(error))
                }
            )

    }

    function request() { return { type: userConstants.GET_TOKEN_REQUEST } }
    function success(token) { return { type: userConstants.GET_TOKEN_SUCCESS, token } }
    function failure(error) { return { type: userConstants.GET_TOKEN_FAILURE, error } }
}
