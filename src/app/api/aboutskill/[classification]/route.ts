import connPrisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


export const GET = async ( req: NextRequest, {params}: {params: {classification:string}} ) => {
  const { classification} = params;
  // console.log("  ========> ", classification)

  try {
    const skillData = await connPrisma.aboutSkill.findMany({
      where: { classification: classification },
    });
    // console.log( JSON.stringify( skillData ));
    return new NextResponse( JSON.stringify( skillData ), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse( JSON.stringify({ message: "Something went wrong in aboutskill api"}), { status: 500} );
  }
}