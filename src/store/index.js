import {applyMiddleware, createStore, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const _compose = process.env.NODE_ENV !== 'production' ? composeWithDevTools({serialize: true, trace: true}) : compose

// sagaMiddleware.run(rootSaga)

export default (initialState) => createStore(reducer, initialState, _compose(applyMiddleware(...middlewares)))