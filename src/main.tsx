import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App'
import 'antd/dist/reset.css'
import 'leaflet/dist/leaflet.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={ store }>
    <App/>
  </Provider>
)
