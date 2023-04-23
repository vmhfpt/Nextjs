import '../styles/globals.css'
import '../styles/style.css'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Layout from './components/layout'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  //console.log(pageProps)
  return ( 
   <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
  </Provider>
  );
}

export default MyApp
