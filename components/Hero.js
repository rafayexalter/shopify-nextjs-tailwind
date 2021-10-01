import Link from "next/link";

export default function Hero() {
  return (
    <div className="px-4 mx-auto my-48 text-center max-w-7xl sm:mt-24 md:mt-72">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">
          Next.js + Shopify + Tailwind
        </p>
        <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:text-6xl md:text-7xl">
          Fast & Modern eCommerce
        </p>
      </h1>
      <h2 className="max-w-md mx-auto mt-3 text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        The eCommerce Revolution.
      </h2>
      <div className="flex items-center justify-center max-w-md mx-auto mt-5 md:mt-8">
        <Link href="/">
          <a className="inline-flex items-center justify-center h-12 px-6 py-3 mr-6 font-medium text-white bg-gray-900 border-transparent rounded-md hover:bg-gray-800">
            Hire me
          </a>
        </Link>
        <Link href="/">
          <a className="inline-flex items-center justify-center h-12 px-6 py-3 mr-6 font-semibold text-gray-900 border-transparent rounded-md hover:text-gray-700">
            Contact me
          </a>
        </Link>
      </div>
    </div>
  );
}
