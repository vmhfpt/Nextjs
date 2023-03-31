import '../styles/globals.css'
import '../styles/style.css'
import Layout from './components/layout'
function MyApp({ Component, pageProps }) {
  //console.log(pageProps)
  return (  <Layout>
    <Component {...pageProps} />
  </Layout>);
}

export default MyApp
