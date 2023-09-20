import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(
      JSON.stringify( JSON.stringify(categories) ), { status: 500 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong! "}), { status: 500 }
    );
  }
  return new NextResponse("Hello~~", { status: 200 });
}

export const POST = () => {
  return new NextResponse("POST Hello~~", { status: 200 });
}