import { columns, ProductResponse } from "./Columns";
import { ProductTable } from "./ProductTable";
import useAxios from "axios-hooks";

const ProductPage = () => {
  const [{ data, loading, error }] = useAxios<ProductResponse>({
    baseURL: "https://dummyjson.com",
    url: "/products?limit=100&select=title,price,brand,stock,category",
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List Page</h1>
      {loading && <p>Loading...</p>}
      {!!error && <p>{error.message}</p>}
      {!!data && <ProductTable columns={columns} data={data.products} />}
    </div>
  );
};

export default ProductPage;
