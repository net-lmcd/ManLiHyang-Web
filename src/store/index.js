import {applyMiddleware, createStore, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from "./sagas/sagas"
import { createLogger } from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()
const middlewares = [sagaMiddleware, logger]
const _compose = process.env.NODE_ENV !== 'production' ? composeWithDevTools({serialize: true, trace: true}) : compose

const store =  (initialState) => createStore(reducer, initialState, _compose(applyMiddleware(...middlewares)))
export default store()
sagaMiddleware.run(rootSaga)
