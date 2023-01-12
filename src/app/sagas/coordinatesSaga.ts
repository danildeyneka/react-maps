import { put, takeLatest } from 'redux-saga/effects'
import { Action } from '@reduxjs/toolkit';
import { coordinatesActions } from '../reducers/coordinatesReducer';
import { initialRoutePointsT, routePointsT } from '../../types';
import { mapsApi } from '../../services/mapsApi';

interface payloadAction extends Action {
  data: initialRoutePointsT
}

function* getRoutesData({ data }: payloadAction) {
  try {
    const response: routePointsT[] = yield mapsApi.getRoute(data)
    yield put(coordinatesActions.setData(response))
  } catch (e) {
    yield put(coordinatesActions.setError(e))
  }
}

export default function* coordinatesSaga() {
  yield takeLatest(coordinatesActions.getData.type, getRoutesData)
}