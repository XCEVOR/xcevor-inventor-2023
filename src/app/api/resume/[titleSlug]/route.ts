import connPrisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";



export const GET = async ( req: NextRequest , {params}: {params: {titleSlug: string}} ) => {
  const {titleSlug} = params;
  // console.log("  ========> ", titleSlug);

  try {
    const resumeDataDesc = await connPrisma.resumeDataDescription.findMany({
      where: { titleSlug: titleSlug, },
    });
    return new NextResponse( JSON.stringify( resumeDataDesc ), { status: 200 });
  } catch (error) {
    console.log({error});
    return new NextResponse( JSON.stringify({ message: "Something went wrong!" }), { status: 500 } );
  }
}

