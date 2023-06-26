import { prisma } from "@/db";
import { NextResponse } from "next/server";

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

      const fetchUsersData = await fetch(
        `https://discord.com/api/v10/users/@me`,
        {
          headers: {
            Authorization: `Bearer ${findUser.access_token}`,
          },
          method: "GET",
        }
      );
      const usersData = await fetchUsersData.json();

      // const keysToDelete = [
      //   "createdAt",
      //   "updatedAt",
      //   "token",
      //   "access_token",
      //   "refresh_token",
      //   "expires_in",
      //   "logged_in",
      //   "email",
      //   "authorId",
      //   "mfa_enabled",
      //   "verified",
      // ];

      // const completeData = {
      //   ...findUser,
      //   ...usersData,
      // };

      // keysToDelete.forEach((key: string) => delete completeData[key]);

      delete usersData["email"];

      return NextResponse.json(usersData);
    } else {
      return NextResponse.json(
        { message: "Unauthorized", status: 401 },
        { status: 401 }
      );
    }
  }
}
