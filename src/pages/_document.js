import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Apple touch icon for iOS home screen */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* SVG favicon for modern browsers */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* PNG fallback for browsers that don't support SVG */}
        <link rel="alternate icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

        {/* Web app manifest for PWAs */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color for address bar (Android/Chrome) */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
