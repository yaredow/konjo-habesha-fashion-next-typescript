"use client";

import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/helpers";
import { Product } from "@prisma/client";
import Image from "next/image";

type ProductType = {
  product: Product;
};

function ProductItem({ product }: ProductType) {
  const router = useRouter();

  const handleClick = () => {
    router.replace(`/shop/${product.slug}`);
  };

  return (
    <div onClick={handleClick} className="group relative hover:cursor-pointer">
      <div className="aspect-w-1 lg:aspect-none relative aspect-square w-full overflow-hidden rounded-md lg:h-80">
        <Image
          src={product.images[0].url}
          alt="product image"
          fill
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className=" mt-4 flex flex-row items-center justify-between">
        <h3 className="text-sm ">{product.name}</h3>
        <p className="text-sm font-medium ">{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
}

export default ProductItem;
