import connectMongoDB from "@/lib/utils/mongo/db";
import User from "@/models/authModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(Request: NextRequest) {
  try {
    const { fullName, email, password, passwordConfirm } = await Request.json();
    await connectMongoDB();

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: "Account already exists", data: user },
        { status: 400 },
      );
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
      passwordConfirm,
    });

    return NextResponse.json(
      { message: "Account created successfully", data: newUser },
      { status: 201 },
    );
  } catch (err: any) {
    throw new Error(err);
  }
}