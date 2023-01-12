import { FC, memo } from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { initialRoutePointsT } from '../../types';
import { tableColumns } from '../../constants';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { coordinatesActions } from '../../app/reducers/coordinatesReducer';
import { selectInitialRoutePoints } from '../../app/selectors/coordinatesSelectors';
import s from './routesTable.module.css'

export const RoutesTable: FC = memo(() => {
  const initialRoutePoints = useSelector(selectInitialRoutePoints)
  const dispatch = useAppDispatch()
  const tableData = initialRoutePoints.map((item, index) => {
    return { ...item, key: index + 1 }
  })
  const handleOnRowClick = (data: initialRoutePointsT) => {
    dispatch({ type: coordinatesActions.getData.type, data })
  }

  return <Table className={ s.table } columns={ tableColumns } dataSource={ tableData } pagination={ false }
                onRow={ (record) => {
                  return { onClick: e => handleOnRowClick(record) }
                } }
  />
})