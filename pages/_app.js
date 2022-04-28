import '@/styles/globals.css'
import { wrapper } from '@/modules/store'
import { Nav, Header, Footer} from '@/components'

const MyApp = ({ Component, pageProps }) => {
  return <>
  <Header/>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default wrapper.withRedux(MyApp)
