
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Axios from 'axios'


 function App({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
  Axios.defaults.withCredentials = true;
  return <Component {...pageProps} />
}
export default App