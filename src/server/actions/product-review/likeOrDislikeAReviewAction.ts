"use server";

import prisma from "@/lib/prisma";
export async function likeOrDislikeAReviewAction(
  userId: string,
  productId: string,
  action: "like" | "dislike",
) {
  try {
    let update: Record<string, any> = {};

    if (action === "like") {
      const existingLike = await prisma.like.findFirst({
        where: { userId },
      });

      if (existingLike) {
        update = {
          likes: { disconnect: [{ id: existingLike.id }] },
        };
      } else {
        update = {
          likes: {
            connect: [{ id: userId }],
          },
          dislikes: {
            disconnect: [{ id: userId }],
          },
        };
      }
    } else if (action === "dislike") {
      const existingDislike = await prisma.dislike.findFirst({
        where: { userId },
      });

      if (existingDislike) {
        update = {
          dislikes: {
            disconnect: [{ id: existingDislike.id }],
          },
        };
      } else {
        update = {
          dislikes: {
            connect: [{ id: userId }],
          },
          likes: {
            disconnect: [{ id: userId }],
          },
        };
      }
    }

    const review = await prisma.review.update({
      where: { id: productId },
      data: update,
      include: {
        likes: true,
        dislikes: true,
      },
    });

    if (!review) {
      throw new Error("Review not found");
    }

    return { success: true, message: "Action performed successfully" };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
