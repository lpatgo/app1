
import '../styles/globals.css';
import Head from 'next/head';

import type { AppProps } from "next/app";
import { Thasadith } from "next/font/google"


/*
const sans = Thasadith ({
  subsets: ["latin"],
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Thasadith.className}>
    <Component {...pageProps} />;
      </main>
  );
}
*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
          <Head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&family=Thasadith:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="https://use.typekit.net/ryq8thb.css" />
          </Head>
          <Component {...pageProps} />
    </>
  );
}





