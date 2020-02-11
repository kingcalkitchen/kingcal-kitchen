import { createStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import rootReducer from './../_reducers/index'

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare,
    ),
)
