import "../styles/globals.css";
import { useState, useEffect } from "react";
import { ApiProvider } from "../context/apiContext";
import ApiClient from '../api/api-client';
import Cookies from 'js-cookie';


function MyApp({ Component, pageProps }) {
  const [backend, setBacked] = useState({
    api: new ApiClient()
      .setHeader("lang", "en")
      .setHeader("Accept", "Application/json")
      .setHeader("Content-Type", "application/json"),
    auth: Cookies.get('authToken') ? 
      new ApiClient()
        .setHeader("lang", "en")
        .setHeader("Accept", "Application/json")
        .setHeader("Content-Type", "application/json")
        .setBearerAuth(Cookies.get('authToken'))
      : null
  });
  
  return (
    <ApiProvider value={{backend, setBacked}}>
      <Component {...pageProps} />
    </ApiProvider>
  );
  
}

export default MyApp;
