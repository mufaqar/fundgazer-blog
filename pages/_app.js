import Header from '../components/header';
import '../styles/index.css';
import { useEffect, useState } from "react";
import Footer from '../components/footer';
import { useInView } from "react-hook-inview"; // use current active screen Area


function MyApp({ Component, pageProps }) {

  const [scrollTop, setScrollTop] = useState(0);
  const [headerClr, setHeaderClr] = useState(false);
  const [sideBarSticky, setSideBarSticky] = useState(true);
  console.log("🚀 ~ file: _app.js ~ line 13 ~ MyApp ~ sideBarSticky", sideBarSticky)

  const [ref, inView] = useInView();

  
  useEffect(() => {
    if (inView) {
      setSideBarSticky(false);
    } else {
      setSideBarSticky(true);
    }
  }, [sideBarSticky]);


  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= '800' ? setHeaderClr(true) : setHeaderClr(false);
    // scrollTop >= '440' ? setStickyRP(true) : setStickyRP(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  
  }, [scrollTop]);

  return (
    <>
      <Header headerClr={headerClr} scrollTop={scrollTop}/>
      <Component {...pageProps}  sideBarSticky={sideBarSticky}/>
      <div ref={ref}></div>
      <Footer />
    </>
  );
}

export default MyApp;
