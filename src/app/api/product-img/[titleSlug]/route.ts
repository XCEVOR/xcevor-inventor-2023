import { NextRequest, NextResponse } from "next/server";
import connPrisma from "@/utils/connect";


export const GET = async ( req: NextRequest, { params }: {params: {titleSlug:string}} ) => {
  const { titleSlug } = params;
  // console.log("  ========> ", titleSlug)

  try {
    const productsImg = await connPrisma.productimage.findMany({
      where: {        titleSlug: titleSlug,      },
    });
    // const productsImg = await connPrisma.productimage.findMany();
    
    // console.log(JSON.stringify( productsImg ));
    return new NextResponse( JSON.stringify( productsImg ), { status: 200 } );
  } catch (error) {
    console.log(error);
    return new NextResponse( JSON.stringify({ message: "Something went wrong!"}), { status: 500 } );
  }

  // return new NextResponse("Hello~~", { status: 200 });
}

export const POST = () => {
  return new NextResponse("POST Hello~~", { status: 200 });
}