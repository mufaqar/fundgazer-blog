import Header from '../components/header';
import '../styles/index.css';

import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
