import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'
import store from "../store"
import { StoreProvider } from 'easy-peasy'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </StoreProvider>
    
  )
}
export default MyApp
