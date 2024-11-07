import Head from "next/head";
import { DEFAULT_SEO } from "../constants/seo.const";
import "./../assets/scss/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>{DEFAULT_SEO.title}</title>
        <meta name="description" content={DEFAULT_SEO.description} />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
