import '../styles/app.css';
import store from '../store/index';
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />  
    </Provider>
  )
}