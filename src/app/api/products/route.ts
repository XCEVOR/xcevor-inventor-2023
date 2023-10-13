import { NextRequest, NextResponse } from "next/server";
import connPrisma from "@/utils/connect";


export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const products = await connPrisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    });
    // console.log(JSON.stringify( products ));
    return new NextResponse( JSON.stringify( products ), { status: 200 } );
  } catch (error) {
    console.log(error);
    return new NextResponse( JSON.stringify({ message: "Something went wrong!"}), { status: 500 } );
  }

  // return new NextResponse("Hello~~", { status: 200 });
}

export const POST = () => {
  return new NextResponse("POST Hello~~", { status: 200 });
}