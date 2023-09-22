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






// ERROR   - err TypeError: categories.map is not a function <-- JSON.stringify(JSON.stringify( categories )),

// 20230921200218
// http://localhost:3000/api/categories

// "[
//   {\"id\":\"clmrfqd930000ua8k3on07c5v\",\"createdAt\":\"2023-09-20T07:41:08.632Z\",\"title\":\"aaa\",\"desc\":\"aaaaa\",\"color\":\"white\",\"img\":\"img/pfolio/02.png\",\"slug\":\"web\"},
//   {\"id\":\"clmrfr1g20001ua8kucj6jwns\",\"createdAt\":\"2023-09-20T07:41:39.987Z\",\"title\":\"bbb\",\"desc\":\"bbbbb\",\"color\":\"black\",\"img\":\"img/pfolio/03.png\",\"slug\":\"app\"},
//   {\"id\":\"clmrfry7r0003ua8khvbqs8yw\",\"createdAt\":\"2023-09-20T07:42:22.455Z\",\"title\":\"ccc\",\"desc\":\"ccccc\",\"color\":\"white\",\"img\":\"img/pfolio/04.png\",\"slug\":\"etc\"}
// ]"