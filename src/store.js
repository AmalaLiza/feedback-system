import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducers";
import sagas from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

// Create middleware for sagas.
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

	// Creating the redux-store from reducers and enhancers.
	const store = createStore(createReducer(), enhancer);

	// Run each saga
	sagas.forEach((saga) => sagaMiddleware.run(saga));
	store.runSaga = sagaMiddleware.run;
	return store;
}
