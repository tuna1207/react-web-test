import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reducerPrefixFormat } from '../common'
import * as R from 'ramda'

const stateKey = 'app'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  app_state_restored: false,
  assets_cached: false,
  push: {
    registered: false,
    token: null
  },
  redux_state_restored: false
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions(
  {
    initializeApp: null,
    cacheAssetsStart: null,
    cacheAssetsFinish: ['error'],
    getExpoPushTokenRequest: null,
    getExpoPushTokenFinish: ['error', 'token'],
    setAppStateRestored: null,
    setReduxStateRestored: null,

    requestFailure: ['error']
  },
  {
    prefix: reducerPrefixFormat(stateKey)
  }
)

/* ------------- Reducers ------------- */

const initializeApp = R.identity

const cacheAssetsStart = state =>
  Immutable(state).merge({
    assets_cached: false
  })

const cacheAssetsFinish = state =>
  Immutable(state).merge({
    assets_cached: true
  })

const getExpoPushTokenRequest = state =>
  Immutable(state).merge({
    push: {
      registered: false,
      token: null
    }
  })

const getExpoPushTokenFinish = (state, { token }) =>
  Immutable(state).merge({
    push: {
      registered: true,
      token
    }
  })

const setAppStateRestored = state =>
  Immutable(state).merge({
    app_state_restored: true
  })

const setReduxStateRestored = state =>
  Immutable(state).merge({
    redux_state_restored: true
  })

const requestFailure = R.identity

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.INITIALIZE_APP]: initializeApp,
  [Types.CACHE_ASSETS_START]: cacheAssetsStart,
  [Types.CACHE_ASSETS_FINISH]: cacheAssetsFinish,
  [Types.GET_EXPO_PUSH_TOKEN_REQUEST]: getExpoPushTokenRequest,
  [Types.GET_EXPO_PUSH_TOKEN_FINISH]: getExpoPushTokenFinish,
  [Types.SET_APP_STATE_RESTORED]: setAppStateRestored,
  [Types.SET_REDUX_STATE_RESTORED]: setReduxStateRestored,

  [Types.REQUEST_FAILURE]: requestFailure
})

const reducerMap = { [stateKey]: reducer }

/* ------------- Selectors ------------- */
const getReducerState = state => state[stateKey]
const isAppStateRestored = reducerState => reducerState.app_state_restored
const isAssetsCached = reducerState => reducerState.assets_cached
const isPushTokenRegistered = reducerState => reducerState.push.registered
const isReduxStateRestored = reducerState => reducerState.redux_state_restored
const isReady = reducerState =>
  reducerState.app_state_restored &&
  reducerState.assets_cached &&
  reducerState.redux_state_restored

/* ------------- Export ------------- */
export default {
  isAppStateRestored,
  isAssetsCached,
  isPushTokenRegistered,
  isReduxStateRestored,
  isReady,

  // default export
  INITIAL_STATE,
  Types,
  Creators,

  stateKey,
  getReducerState,
  reducerMap
}
