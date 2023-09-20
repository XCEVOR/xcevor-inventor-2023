import { NextResponse } from "next/server";
import connPrisma from "@/utils/connect";


export const GET = async () => {
  try {
    const categories = await connPrisma.category.findMany();
    return new NextResponse( JSON.stringify( categories ), { status: 200 } );  // ERROR   - err TypeError: categories.map is not a function <-- JSON.stringify(JSON.stringify( categories )),
  } catch (error) {
    console.log(error);
    return new NextResponse( JSON.stringify({ message: "Something went wrong!"}), { status: 500 } );
  }

  // return new NextResponse("Hello~~", { status: 200 });
}

export const POST = () => {
  return new NextResponse("POST Hello~~", { status: 200 });
}