import { NextRequest, NextResponse } from "next/server";
import connPrisma from "@/utils/connect";


export const GET = async ( req: NextRequest, { params }: {params: {id:string}} ) => {
  const { id } = params;

  try {
    const products = await connPrisma.product.findUnique({
      where: {        id: id,      },
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