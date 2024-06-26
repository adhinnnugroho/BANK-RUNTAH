
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

declare global {
    interface Window {
        $: any;
        jQuery: any;
    }
}

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <SessionProvider session={session}>
    <div className="">
      <Component {...pageProps} session={session} />
    </div>
  </SessionProvider>
}
