import ProductPageContent from "../../components/ProductPageContent";
import { getAllProducts, getProduct } from "../../lib/shopify";

export default function ProductPage({ product }) {
  console.log("product page", product);
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   const slug = params.slug;
//   const product = await getProduct(slug);

//   return {
//     props: {
//       product,
//     },
//   };
// }

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const slug = String(item.node.handle);

    // [slug].js
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);

  return {
    props: {
      product,
    },
  };
}
