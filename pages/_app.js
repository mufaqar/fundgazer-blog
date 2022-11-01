import Header from '../components/header';
import '../styles/index.css';
import { useEffect, useState } from "react";
import Footer from '../components/footer';
import { useInView } from "react-hook-inview"; // use current active screen Area
import SEO from "@bradgarropy/next-seo"
import { Provider } from '@lyket/react';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {


  const [scrollTop, setScrollTop] = useState(0);
  const [headerClr, setHeaderClr] = useState(false);
  // const [sideBarSticky, setSideBarSticky] = useState(true);
  // const [ref, inView] = useInView();
  const [serachInput, setSearchInput] = useState();

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
      <NextNProgress color="#E86A34"/>
      <Provider apiKey="pt_8a818b87fc27d460b5a9cb67994db7" theme={{
        colors: {
          background: "#F8F8F8",
          text: "#6F47E9",
          primary: "rgba(255, 224, 138, 0.4)"
        }
      }}>
        <Head>
          <meta property="og:url" content={`https://fundgazer.com/`}></meta>
        </Head>
        <SEO title="Fundgazer Blog" description="From building your diversified long-term portfolio and tracking your assets to finding investment ideas, we got you covered." />
        <Header headerClr={headerClr} scrollTop={scrollTop} serachInput={serachInput} setSearchInput={setSearchInput} />
        <Component {...pageProps} serachInput={serachInput} setSearchInput={setSearchInput} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;




