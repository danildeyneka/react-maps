import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RoutesMap, RoutesTable } from './components';
import { selectLoading } from './app/selectors/coordinatesSelectors';
import loader from './assets/loader.svg'
import './App.css'

export const App: FC = () => {
  const loading = useSelector(selectLoading)

  return <main className="wrapper">
    <RoutesTable/>
    { loading && <img src={ loader } alt="spinner"/> }
    <RoutesMap/>
  </main>
}

export default App
