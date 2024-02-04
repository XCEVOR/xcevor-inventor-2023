// src>app>api>solvedac>route.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import axios from 'axios';
// import cheerio from 'cheerio';
import * as cheerio from "cheerio"


export const GET = async () => {
  try {
    // const { data } = await axios.get('https://www.google.com');
    const { data } = await axios.get('https://solved.ac/profile/xcevor');
    const $ = cheerio.load(data);
    const title = $('title').text();
    const rankTaggedAsSmall = $('small').text();
    console.log(" @@@ title: ", title)
    console.log(" @@@ rankTaggedAsSmall: ", rankTaggedAsSmall)
    return new NextResponse( JSON.stringify({ rank: rankTaggedAsSmall }), { status: 200 });
  } catch (error) {
    console.log({error});
    return new NextResponse( JSON.stringify({ message: "Something went wrong!" }), { status: 300 });
  }
}


// /html/head/title
// /html/body/div[1]/div[3]/div/div[2]/div[1]/div[2]/small
