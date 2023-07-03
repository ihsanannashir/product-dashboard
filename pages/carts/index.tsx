import CartPage from "@/components/carts/Page";
import useAxios from "axios-hooks";
import Head from "next/head";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Carts List</title>
        <meta
          name="description"
          content="Online Test - Frontend Engineer - Ihsan An-Nashir"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CartPage />
    </>
  );
};

export default Cart;
