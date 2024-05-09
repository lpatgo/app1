
import '../styles/globals.css';

import type { AppProps } from "next/app";
import {Red_Hat_Display} from "next/font/google";

const rhd = Red_Hat_Display({subsets: ["latin"]});


export default function App({ Component, pageProps }: AppProps) {
  return (

    <main className={rhd.className}>
    <Component {...pageProps} />;

    </main>

  );
}








