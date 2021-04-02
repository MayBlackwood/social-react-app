// Lib
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Root saga
import mainSaga from './sagas';

// Root reducer
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['User', 'users', 'Flat'],
  blackList: ['redirectControl'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>
  createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

const configuredStore = configureStore();
const persist = persistStore(configuredStore);

sagaMiddleware.run(mainSaga);

export { persist };
export default configuredStore;
