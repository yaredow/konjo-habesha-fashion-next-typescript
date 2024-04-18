import Product from "@/models/productModel";
import connectMongoDB from "@/utils/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  try {
    await connectMongoDB();
    const result = await Product.aggregate([
      {
        $search: {
          index: "Search-text",
          text: {
            query: query,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ]);

    if (!result) {
      return NextResponse.json(
        { message: "No results found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}