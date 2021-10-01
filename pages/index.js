import Head from "next/head";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { getProductInCollection } from "../lib/shopify";

export default function Home({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <title>Fast & Modern eCommerce</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        ></meta>
        <meta
          property="description"
          content="A super fast front-end for shopify stores."
        />
        <meta
          property="og:description"
          content="A super fast front-end for shopify stores."
        />
        <meta property="og:title" content="Fast & Modern eCommerce" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://shopify-nextjs-tailwind-two.vercel.app"
        />
        <meta
          property="og:image"
          content="https://shopify-nextjs-tailwind-two.vercel.app/images/share.png"
        />
        <meta property="og:site_name" content="Fast & Modern eCommerce" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Hero />
      <ProductList products={products} />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductInCollection();

  return {
    props: {
      products,
    },
  };
}
