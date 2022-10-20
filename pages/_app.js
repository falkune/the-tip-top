<<<<<<< HEAD
import React, { useContext } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  );
=======
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
>>>>>>> 9b2aab2 (update route dashboard)
}

export default MyApp;
