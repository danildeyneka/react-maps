import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { coordinatesReducer } from './reducers/coordinatesReducer';
import coordinatesSaga from './sagas/coordinatesSaga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  coordinates: coordinatesReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(coordinatesSaga)

export type RootReducer = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch