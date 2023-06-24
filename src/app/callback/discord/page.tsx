// "use client";
import { prisma } from "@/db";
import { useSearchParams } from "next/navigation";

export default async function Home() {
  //   const params = useSearchParams();

  //   const code = params.get("code");
  //   const state = params.get("state");

  const user = await prisma.user.create({
    data: {
      email: "hello",
      authorId: "hello",
      language: "en",
      token: "u",
      username: "n",
    },
  });

  //   if (!code) return window.close();

  return <>user</>;
}
