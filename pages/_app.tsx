import '../styles/globals.css';

import type { AppProps } from "next/app";
import {Red_Hat_Display} from "next/font/google";

import Head from 'next/head';

const rhd = Red_Hat_Display({subsets: ["latin"]});


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"   />
<link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>

                {/* Adobe Fonts */}
                <link rel="stylesheet" href="https://use.typekit.net/ryq8thb.css" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}



export default function App({ Component, pageProps }: AppProps) {
  return (

    <main className={rhd.className}>
    <Component {...pageProps} />;

    </main>

  );
}











