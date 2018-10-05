import { createActions, createReducer } from 'reduxsauce'
import { data } from '../../services/FakeData'
import Immutable from 'seamless-immutable'
import { reducerPrefixFormat } from '../common'
import * as R from 'ramda'

const stateKey = 'employee'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  listEmployees: data
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions(
  {
    createNewClient: null,
    onDeleteClient: ['idx'],
    onSaveNewClient: ['client', 'idx']
  },
  {
    prefix: reducerPrefixFormat(stateKey)
  }
)

/* ------------- Reducers ------------- */

const createNewClient = (state) =>
  Immutable(state).merge({
    listEmployees: [
      ...state.listEmployees,
      {
        name: '',
        key: 'password',
        dateCreated: '',
        isNewAdd: true
      }
    ]
  })

const onSaveNewClient = (state, { client, idx }) => {
  const newArr = R.clone(state.listEmployees)
  newArr[idx] = client
  return Immutable(state).merge({
    listEmployees: newArr
  })
}

const onDeleteClient = (state, { idx }) => {
  return Immutable(state).merge({
    listEmployees: R.remove(idx, idx + 1, state.listEmployees)
  })
}

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_NEW_CLIENT]: createNewClient,
  [Types.ON_DELETE_CLIENT]: onDeleteClient,
  [Types.ON_SAVE_NEW_CLIENT]: onSaveNewClient
})

const reducerMap = { [stateKey]: reducer }

/* ------------- Selectors ------------- */
const getReducerState = state => state[stateKey]

/* ------------- Export ------------- */
export default {
  // default export
  INITIAL_STATE,
  Types,
  Creators,

  stateKey,
  getReducerState,
  reducerMap
}
