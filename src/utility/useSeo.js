// components/SEO.js
import Head from "next/head";

export default function SEO({ 
  title, 
  description, 
  url, 
  image = "/Outsourze Logo Mark PNG.png" 
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
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
