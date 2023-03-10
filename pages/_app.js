import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { ApiProvider } from "../context/apiContext";
import ApiClient from '../api/api-client';
import apiSendPulse from "../api/api-sendPulse"
import Cookies from 'js-cookie';
import Script from "next/script";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import "animate.css";
import dayjs from "dayjs";
import "dayjs/locale/fr"
dayjs.locale('fr')
import "animate.css";
import 'nextjs-breadcrumbs/dist/index.css';
import CookiesManagement from '../component/cookiesManagement';

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
      : null,
    sender: new apiSendPulse()
      .setHeader("lang", "en")
      .setHeader("Accept", "Application/json")
      .setHeader("Content-Type", "application/json")
      .setHeader('Access-Control-Allow-Origin', '*')
      .setBaseUrl(process.env.NEXT_PUBLIC_SENDPULSE_BASE_URL)
  });

  return (
    <>
      <Script
        id='GoogleA'
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script
        id='GoogleS'

        strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
      });
    `}
      </Script>

      <ApiProvider value={{ backend, setBacked }}>
        <Component {...pageProps} />
        <ToastContainer />
      </ApiProvider>
      <CookiesManagement/>
    </>
  );

}

export default MyApp;
