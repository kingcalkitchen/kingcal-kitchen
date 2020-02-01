import { createStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './../_reducers/index'

const loggerMiddleWare = createLogger()

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare,
        loggerMiddleWare,
    ),
)
