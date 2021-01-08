import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import allReducers from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
