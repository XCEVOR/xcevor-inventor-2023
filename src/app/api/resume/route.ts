import connPrisma from "@/utils/connect";
import { NextResponse } from "next/server";



export const GET = async () => {
  try {
    const resumeData = await connPrisma.resumeData.findMany();
    return new NextResponse( JSON.stringify( resumeData ), { status: 200 });
  } catch (error) {
    console.log({error});
    return new NextResponse( JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
}