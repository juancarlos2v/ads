import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const url = process.env.ADS_URL;

export async function POST(req) {
  const request = new NextRequest(req.url);
  const cuil = request.nextUrl.searchParams.get("cuil");

  const urlfinal = `${url}/usuarios/${cuil}`;
  console.log(urlfinal);

  try {
    const response = await axios.post(urlfinal);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error backend:", error.response?.data);
    return NextResponse.json(
      { error: error.response?.data },
      { status: error.response?.status || 500 }
    );
  }
}
