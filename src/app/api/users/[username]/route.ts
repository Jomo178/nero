import { NextResponse } from "next/server";
import { botsDataPromise, getUserData } from "@/src/function/getUserData";
import { prisma } from "@/src/lib/db";

export async function POST(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;

  const authorizationHeader = request.headers.get("Authorization");
  if (!authorizationHeader) {
    return NextResponse.json(
      { message: "Unauthorized", status: 401 },
      { status: 401 }
    );
  }

  if (username === "@me") {
    const token = authorizationHeader.split("Bearer ")[1];
    if (!token) {
      return NextResponse.json(
        { message: "Not Acceptable", status: 406 },
        { status: 406 }
      );
    }

    const findUser = await prisma.user.findFirst({ where: { token } });
    if (!findUser) {
      return NextResponse.json(
        { message: "Bad Request", status: 400 },
        { status: 400 }
      );
    }

    // const isTokenExpired =
    //   Date.now() > findUser.logged_in.getTime() + findUser.expires_in;

    // if (isTokenExpired) {
    // }

    const user = await getUserData(findUser?.access_token, ["email"]);

    return NextResponse.json(user);
  }
}
