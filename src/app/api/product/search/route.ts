import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get("text");

  if (!text || text.trim() === "") {
    return NextResponse.json(
      { message: "Query cannot be empty" },
      { status: 400 },
    );
  }

  try {
    const response = await prisma.$runCommandRaw({
      aggregate: "products",
      pipeline: [
        {
          $search: {
            index: "Search-text",
            text: {
              query: text,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ],
      cursor: {},
    });

    if (!response || !response.cursor) {
      return NextResponse.json(
        { message: "No results found" },
        { status: 404 },
      );
    }

    const { firstBatch }: any = response.cursor;

    const results = firstBatch.map((item: any) => {
      return {
        ...item,
        id: item._id.$oid,
        _id: undefined,
      };
    });

    return NextResponse.json({ results }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
