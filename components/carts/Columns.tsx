import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

export type CartProduct = {
  id?: number;
  title?: string;
  price?: number;
  quantity?: number;
  total?: number;
  discountedPrice?: number;
};

export type Cart = {
  id?: number;
  products?: CartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export interface CartResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export const columns: ColumnDef<Cart>[] = [
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "totalProducts",
    header: "Total Products",
  },
  {
    accessorKey: "totalQuantity",
    header: "Total Quantity",
  },
  {
    accessorKey: "total",
    header: "Total Price",
  },
  {
    accessorKey: "id",
    header: "",
  },
];
