import "./globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Navbar from "@/components/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
