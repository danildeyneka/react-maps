import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialRoutePointsT, routePointsT } from '../../types';

const initialState = {
  initialRoutePoints: [
    {
      fromLatitude: 59.84660399,
      fromLongitude: 30.29496392,

      toLatitude: 59.82934196,
      toLongitude: 30.42423701
    },
    {
      fromLatitude: 59.82934196,
      fromLongitude: 30.42423701,

      toLatitude: 59.82761295,
      toLongitude: 30.41705607
    },
    {
      fromLatitude: 59.83567701,
      fromLongitude: 30.38064206,

      toLatitude: 59.84660399,
      toLongitude: 30.29496392
    },
    {
      fromLatitude: 59.84660399,
      fromLongitude: 30.29496392,

      toLatitude: 59.82761295,
      toLongitude: 30.41705607
    },
    {
      fromLatitude: 59.83567701,
      fromLongitude: 30.38064206,

      toLatitude: 59.84660399,
      toLongitude: 30.29496392
    }
  ] as initialRoutePointsT[],
  routePoints: [] as routePointsT[],
  loading: false
}

const coordinates = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    getData: state => {
      state.loading = true
    },
    setData: (state, action: PayloadAction<routePointsT[]>) => {
      state.loading = false
      state.routePoints = action.payload
    },
    setError: (state, action) => {
      state.loading = false
      alert(action.payload)
    }
  }
})

export const coordinatesActions = coordinates.actions

export const coordinatesReducer = coordinates.reducer