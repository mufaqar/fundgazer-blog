import Header from "../components/header";
import "../styles/index.css";
import { store } from "../lib/store";
import { Provider } from "react-redux";

import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
