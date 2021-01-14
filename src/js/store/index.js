// src/js/store/index.js

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import mainReducer from '../reducers/main'
import authReducer from '../reducers/auth'
import { forbiddenWordsMiddleware } from '../middleware'
import createSagaMiddleware from 'redux-saga'
import apiSaga from '../sagas/api-saga'

const initialiseSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  forbiddenWordsMiddleware,
  initialiseSagaMiddleware
]

const rootReducer = combineReducers({
  main: mainReducer,
  auth: authReducer
})

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(...middleware)
  )
)

initialiseSagaMiddleware.run(apiSaga)

export default store