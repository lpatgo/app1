import '../styles/globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import type { AppProps } from "next/app";
import {Red_Hat_Display} from "next/font/google";

const rhd = Red_Hat_Display({subsets: ["latin"]});


config.autoAddCss = false; // Prevents Font Awesome from adding its CSS since we are importing it ourselves



export default function App({ Component, pageProps }: AppProps) {
  return (

    <main className={rhd.className}>
    <Component {...pageProps} />;

    </main>

  );
}















