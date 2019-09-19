import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ignore
  }
};

export const create = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
      applyMiddleware(...middleware, logger),
      compose,
    ),
  );

  store.subscribe(() => {
    saveState({
      ...store.getState(),
    });
  });

  return store;
};
