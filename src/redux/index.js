import { combineReducers } from 'redux'
import createStore from './createStore'
import * as R from 'ramda'
import * as reducers from './reducers'

/* ------------- Reducers ------------- */
const allReducers = R.pipe(
  R.values,
  R.map(R.prop('reducerMap')),
  R.mergeAll
)(reducers)

const rootReducer = combineReducers(allReducers)

/* ------------- Create Store ------------- */
const store = createStore(rootReducer)

export default store
