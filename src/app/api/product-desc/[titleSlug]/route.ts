import { NextRequest, NextResponse } from "next/server";
import connPrisma from "@/utils/connect";
import { title } from "process";


export const GET = async ( req: NextRequest, { params }: {params: {titleSlug:string}} ) => {
  const { titleSlug } = params;
  console.log("  ========> ", titleSlug)

  try {
    const productDescs = await connPrisma.productdescription.findMany({
      where: {        titleSlug: titleSlug,      },
    });
    // const productDescs = await connPrisma.productdescription.findMany();
    
    console.log(JSON.stringify( productDescs ));
    return new NextResponse( JSON.stringify( productDescs ), { status: 200 } );
  } catch (error) {
    console.log(error);
    return new NextResponse( JSON.stringify({ message: "Something went wrong!"}), { status: 500 } );
  }

  // return new NextResponse("Hello~~", { status: 200 });
}

export const POST = () => {
  return new NextResponse("POST Hello~~", { status: 200 });
}