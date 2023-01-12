export type initialRoutePointsT = {
  fromLatitude: number
  fromLongitude: number
  toLatitude: number
  toLongitude: number
  key?: number
}

export type routeResponseT = {
  routes: Array<{
    geometry: {
      coordinates: number[][];
    };
  }>
}

export type routePointsT = [number, number]