import { applyMiddleware, compose, createStore } from 'redux'

// creates the store
export default rootReducer => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  // const sagaMiddleware = createSagaMiddleware()
  // middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- createStore ------------- */

  const store = createStore(rootReducer, compose(...enhancers))

  // kick off root saga
  // sagaMiddleware.run(rootSaga)

  return store
}
