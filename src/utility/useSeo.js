// components/SEO.js
import Head from "next/head";

export default function SEO({ 
  title, 
  description, 
  url, 
  image = "/og-image.png" 
}) {
  const siteName = "Outsourze"; // you can set this once

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://outsourze.com/images/og-image.jpg" />
      <meta property="og:site_name" content="Outsourze" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://outsourze.com/images/og-image.jpg" />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
