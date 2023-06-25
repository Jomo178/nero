import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { code: string | undefined } }
) {
  const code = params.code;

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

  let { access_token, refresh_token, expires_in } = responseTokenData;

  const randomToken = generateRandomString(59);

  const responseInfo = await fetch(`https://discord.com/api/v10/users/@me`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    method: "GET",
  });

  const responseInfoData = await responseInfo.json();

  const findUser = await prisma.user.findFirst({
    where: {},
  });

  return NextResponse.json({ product: "ddd" });
}

function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

type access_token_response = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
};
