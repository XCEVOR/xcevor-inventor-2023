import connPrisma from "@/utils/connect";
import { NextResponse } from "next/server";



export const GET = async () => {
  try {
    const aboutInterestData = await connPrisma.aboutInterest.findMany();
    return new NextResponse( JSON.stringify( aboutInterestData ), { status: 200 });
  } catch (error) {
    console.log({error});
    return new NextResponse( JSON.stringify({ message: "Something went wrong!" }), { status: 300 });
  }
}