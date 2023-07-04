import { prisma } from "@/db";
import { avatar, DiscordUser } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;

  if (username === "@me") {
    const authorizationHeader = request.headers.get("Authorization");
    if (!authorizationHeader) {
      return NextResponse.json(
        { message: "Unauthorized", status: 401 },
        { status: 401 }
      );
    }

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

    const isTokenExpired =
      Date.now() > findUser.logged_in.getTime() + findUser.expires_in;

    if (isTokenExpired) {
    }

    let userData: DiscordUser | undefined;
    let botData: DiscordUser | undefined;

    try {
      [userData, botData] = await Promise.all([
        usersDataPromise(findUser.access_token),
        botsDataPromise(),
      ]);
    } catch (error) {
      userData = undefined;
      botData = await botsDataPromise();
    }

    userData = processAvatar(userData);
    botData = processAvatar(botData);

    return NextResponse.json({ userData, botData });
  }
}

function usersDataPromise(access_token: string): Promise<DiscordUser> {
  return new Promise((resolve, reject) => {
    fetch(`https://discord.com/api/v10/users/@me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Bad request: ${response.status}`);
        }
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function botsDataPromise(): Promise<DiscordUser> {
  return new Promise((resolve, reject) => {
    fetch(`https://discord.com/api/v10/users/@me`, {
      headers: {
        Authorization: `Bot ${process.env.CLIENT_TOKEN}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Bad request: ${response.status}`);
        }
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function processAvatar(data: DiscordUser | undefined) {
  if (data) {
    data.avatar = avatar(data.id, data.avatar, data.discriminator);
    delete data.email;
  }
  return data;
}
