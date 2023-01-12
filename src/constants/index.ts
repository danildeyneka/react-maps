import { ColumnsType } from 'antd/es/table';
import { initialRoutePointsT } from '../types';

export const tableColumns: ColumnsType<initialRoutePointsT> = [
  {
    title: 'Номер заявки',
    dataIndex: 'key'
  },
  {
    title: 'От: широта',
    dataIndex: 'fromLatitude'
  },
  {
    title: 'От: долгота',
    dataIndex: 'fromLongitude'
  },
  {
    title: 'До: широта',
    dataIndex: 'toLatitude'
  },
  {
    title: 'До: долгота',
    dataIndex: 'toLongitude'
  }
]