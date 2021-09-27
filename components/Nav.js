import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 bg-white border-b">
      <div className="flex items-center justify-between max-w-6xl px-4 pt-4 pb-2 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="">
            <span className="pt-1 text-lg font-bold">Shopify + Next.js</span>
          </a>
        </Link>
        <a href="#" className="font-bold text-md">
          Cart
        </a>
      </div>
    </header>
  );
}
