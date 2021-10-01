import "tailwindcss/tailwind.css";
import "../styles/custom.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import Router, { useRouter } from "next/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
