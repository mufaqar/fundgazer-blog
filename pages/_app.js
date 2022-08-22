import Header from '../components/header';
import '../styles/index.css';
import { useEffect, useState } from "react";
import Footer from '../components/footer';
import { useInView } from "react-hook-inview"; // use current active screen Area


function MyApp({ Component, pageProps }) {

  const [scrollTop, setScrollTop] = useState(0);
  const [headerClr, setHeaderClr] = useState(false);
  // const [sideBarSticky, setSideBarSticky] = useState(true);
  // const [ref, inView] = useInView();
  
  
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= '800' ? setHeaderClr(true) : setHeaderClr(false);
    // scrollTop >= '440' ? setSideBarSticky(true) : setSideBarSticky(false);
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
