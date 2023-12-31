import ProductPage from "@/components/products/Page";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Dashboard</title>
        <meta
          name="description"
          content="Online Test - Frontend Engineer - Ihsan An-Nashir"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductPage />
    </>
  );
}
