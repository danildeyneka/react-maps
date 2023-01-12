import { instance } from './index';
import { initialRoutePointsT, routeResponseT } from '../types';

export const mapsApi = {
  getRoute: (coordinates: initialRoutePointsT) => instance.get<routeResponseT>('route/v1/driving/'
    + coordinates.fromLongitude + ','
    + coordinates.fromLatitude + ';'
    + coordinates.toLongitude + ','
    + coordinates.toLatitude
    + '?steps=true&geometries=geojson&overview=full')
    .then(res => res.data.routes[0].geometry.coordinates.map((c) => c.reverse()))
    .catch(e => e)
}