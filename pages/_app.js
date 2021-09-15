import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { AuthProvider } from '../contexts/auth'
function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return <AuthProvider>
  <Component {...pageProps} />
</AuthProvider>
}

export default MyApp
