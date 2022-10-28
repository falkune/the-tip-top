import "../styles/globals.css";
import { ApiProvider } from "../context/apiContext";
import ApiClient from "../api/api-client"
import { useState } from "react";



function MyApp({ Component, pageProps }) {
  const [backend, setBacked] = useState(
    new ApiClient()
    .setHeader("lang", "en")
    .setHeader("Accept", "Application/json")
    .setHeader("Content-Type", "application/json")
  );
  return (
    <ApiProvider value={{backend, setBacked}}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
