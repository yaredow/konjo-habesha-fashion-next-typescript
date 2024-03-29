import { z } from "zod";
import { AVAILABLE_SIZES, AVAILABLE_SORT } from "../constants";

export const ProductFilterValidator = z.object({
  size: z.array(z.enum(AVAILABLE_SIZES)),
  sort: z.enum(AVAILABLE_SORT),
  price: z.tuple([z.number(), z.number()]),
});

export type ProductState = Omit<
  z.infer<typeof ProductFilterValidator>,
  "price"
> & {
  price: { isCustom: boolean; range: [number, number] };
};
