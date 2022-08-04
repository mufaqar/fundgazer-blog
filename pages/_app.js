import Header from '../components/header'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
