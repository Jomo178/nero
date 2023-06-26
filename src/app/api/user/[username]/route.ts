import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const slug = params.username; // 'a', 'b', or 'c'

  return NextResponse.json({ product: "@me" + slug });
}

export async function POST(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;

  if (username === "@me") {
    const authorizationHeader = request.headers.get("Authorization");
    if (authorizationHeader) {
      const token = authorizationHeader.split("Bearer ")[1];
      if (!token)
        return NextResponse.json(
          { message: "Not Acceptable", status: 406 },
          { status: 406 }
        );

      const findUser = await prisma.user.findFirst({ where: { token } });
      if (!findUser)
        return NextResponse.json(
          { message: "Bad Request", status: 400 },
          { status: 400 }
        );

      return NextResponse.json(findUser);
    } else {
      return NextResponse.json(
        { message: "Unauthorized", status: 401 },
        { status: 401 }
      );
    }
  }

  // return NextResponse.json({ product: "@me" + username });
}
