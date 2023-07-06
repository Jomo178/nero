import { NextResponse } from "next/server";
import { generateRandomString } from "@/function/functions";
import { getUserData } from "@/function/getUserData";
import { access_token_response } from "@/types";

import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.text();
  const parsedBody = new URLSearchParams(body);
  const code = parsedBody.get("code");

  if (!code) return NextResponse.error();

  const postData = new URLSearchParams();
  postData.append("client_id", process.env.CLIENT_ID);
  postData.append("client_secret", process.env.CLIENT_SECRET);
  postData.append("grant_type", "authorization_code");
  postData.append("code", code);
  postData.append("redirect_uri", process.env.REDIRECT_URI);

  const responseToken = await fetch(
    `https://discord.com/api/v10/oauth2/token`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: postData.toString(),
    }
  );

  const responseTokenData: access_token_response = await responseToken.json();

  let { access_token, refresh_token } = responseTokenData;

  const token = generateRandomString(59);

  const { user, bot } = await getUserData(access_token);

  if (!user) {
    return NextResponse.json(
      { message: "Bad Request", status: 400 },
      { status: 400 }
    );
  }

  await prisma.user.upsert({
    where: {
      authorId: user.id,
    },
    update: {
      token,
      access_token,
      refresh_token,
      logged_in: new Date(),
      language: user.locale,
      username: user.global_name,
    },
    create: {
      authorId: user.id,
      token,
      email: user.email,
      language: user.locale,
      username: user.global_name,
      access_token,
      refresh_token,
      logged_in: new Date(),
    },
  });

  return NextResponse.json({ token, user, bot });
}
