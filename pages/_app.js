import "../styles/globals.css";
import { ApiProvider } from "../context/apiContext";
import ApiClient from "../api/api-client"



function MyApp({ Component, pageProps }) {
  const backend = new ApiClient()
  .setHeader("lang", "en")

  return(
    <ApiProvider value={backend}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
