import { FC, memo } from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { selectRoutePoints } from '../../app/selectors/coordinatesSelectors';
import s from './routesMap.module.css'

export const RoutesMap: FC = memo(() => {
  const routePoints = useSelector(selectRoutePoints)
  const start = routePoints[0]
  const end = routePoints.at(-1)!

  const FitBounds = () => {
    const map = useMap()
    routePoints.length > 0 && map.fitBounds([start, end], { maxZoom: 16 })
    return <></>
  }

  return <>
    <MapContainer center={ [59.84728, 30.29598] } zoom={ 13 } className={ s.map }>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        routePoints.length > 0 && <>
					<Marker position={ start }>
						<Popup>Погрузка</Popup>
					</Marker>
					<Marker position={ end }>
						<Popup>Разгрузка</Popup>
					</Marker>
				</>
      }
      <Polyline positions={ routePoints }/>
      <FitBounds/>
    </MapContainer>
  </>
})