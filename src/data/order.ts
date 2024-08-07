import prisma from "@/lib/prisma";

export async function getAllOrders() {
  try {
    const orders = await prisma.order.findMany();
    return orders;
  } catch (error) {
    console.error(error);
    return null;
  }
}
