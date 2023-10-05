import connPrisma from "@/utils/connect";
import { NextResponse } from "next/server";


export const GET = async () => {
  try {
    const aboutMeData = await connPrisma.aboutMe.findMany();
    return new NextResponse( JSON.stringify( aboutMeData ), { status: 200 });
  } catch (error) {
    console.log({error});
    return new NextResponse( JSON.stringify({ message: "Something went wrong!"}), { status: 500 });
  }
}