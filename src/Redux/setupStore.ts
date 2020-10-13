import { applyMiddleware, compose, createStore } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
// import createEncryptor from 'redux-persist-transform-encrypt';
// import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

import rootReducer from './combineReducers';

export const configureStore = (initialState?: IRootState) => {
  const enhancer = compose(
    applyMiddleware(thunk),
  );

  /**
   *  This is for persistis data
   */
  // const encryptor = createEncryptor({
  //   secretKey: process.env.ENCRYPTOR_SECRET_KEY,
  //   onError: (error) => {
  //     // tslint:disable-next-line: no-console
  //     console.error('createEncryptor onError ==> ', error);
  //   },
  // });

  // const persistConfig = {
  //   key: 'root',
  //   storage,
  //   whitelist: ['admin'],
  //   transforms: [encryptor],
  // };

  // const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore<IRootState, IAction, {}, {}>(rootReducer, initialState, enhancer);
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./combineReducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
