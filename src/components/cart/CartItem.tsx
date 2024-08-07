"use client";

import Image from "next/image";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";
import { useAppSelector } from "@/store/hooks";
import { getCurrentQuantityById } from "@/store/slices/cartSlice";
import { formatCurrency } from "@/utils/helpers";

function CartItem({ item }: { item: any }) {
  const currentQuantity = useAppSelector(getCurrentQuantityById(item.id));

  return (
    <div className="mb-6 w-full justify-between rounded-lg border p-6 shadow-md sm:flex sm:justify-start md:h-64">
      <Image
        src={item.images[0].url}
        alt="images of habesha traditional clothes"
        height={600}
        width={200}
        className="rounded-md object-cover"
      />

      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="mt-1 text-sm">{item.category}</p>
          <p className=" text-sm">{item.size}</p>
        </div>
        <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
          <UpdateItemQuantity id={item.id} currentQuantity={currentQuantity} />
          <div className="flex items-center space-x-4">
            <p className="text-sm dark:text-gray-100">
              {formatCurrency(item.price)}
            </p>
            <DeleteItem id={item.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
