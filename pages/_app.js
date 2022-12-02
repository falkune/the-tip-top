import "../styles/globals.css";
import { useState, useEffect } from "react";
import { ApiProvider } from "../context/apiContext";
import ApiClient from '../api/api-client';
import Cookies from 'js-cookie';
import Script from "next/script"

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
    <>
    <Script
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
  />

  <Script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
            `}
  </Script>
    <ApiProvider value={{backend, setBacked}}>
      <Component {...pageProps} />
    </ApiProvider>
    </>
  );
  
}

export default MyApp;
