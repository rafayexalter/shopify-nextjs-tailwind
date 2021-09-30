import "tailwindcss/tailwind.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
