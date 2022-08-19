import Header from '../components/header';
import '../styles/index.css';
import { useEffect, useState } from "react";
import Footer from '../components/footer';



function MyApp({ Component, pageProps }) {

  const [scrollTop, setScrollTop] = useState(0);
  const [headerClr, setHeaderClr] = useState(false);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= '800' ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  
  }, [scrollTop]);

  return (
    <>
      <Header headerClr={headerClr} scrollTop={scrollTop}/>
      <Component {...pageProps}  />
      <Footer />
    </>
  );
}

export default MyApp;
