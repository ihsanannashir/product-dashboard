import { columns, CartResponse, CartProduct, Cart } from "./Columns";
import { CartTable } from "./CartTable";
import useAxios from "axios-hooks";

const CartPage = () => {
  const [{ data, loading, error }] = useAxios<CartResponse>({
    baseURL: "https://dummyjson.com",
    url: "/cart",
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart List Page</h1>
      {loading && <p>Loading...</p>}
      {!!error && <p>{error.message}</p>}
      {!!data && <CartTable columns={columns} data={data.carts} />}
    </div>
  );
};

export default CartPage;
