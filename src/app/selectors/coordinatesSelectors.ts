import { RootReducer } from '../store';

export const selectInitialRoutePoints = (state: RootReducer) => state.coordinates.initialRoutePoints
export const selectRoutePoints = (state: RootReducer) => state.coordinates.routePoints
export const selectLoading = (state: RootReducer) => state.coordinates.loading