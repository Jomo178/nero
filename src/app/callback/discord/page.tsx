// import { prisma } from "@/db";

// interface callbackParams {
//   searchParams: {
//     code: string | undefined;
//     state: string | undefined;
//   };
// }

// export default async function Home({ searchParams }: callbackParams) {
//   const { code, state } = searchParams;

//   if (!code)
//     return (
//       <>
//         <p>hello no code</p>
//       </>
//     );

//   const data = new URLSearchParams();
//   data.append("client_id", process.env.CLIENT_ID);
//   data.append("client_secret", process.env.CLIENT_SECRET);
//   data.append("grant_type", "authorization_code");
//   data.append("code", code);
//   data.append("redirect_uri", process.env.REDIRECT_URI);

//   const response = await fetch(`https://discord.com/api/v10/oauth2/token`, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     method: "POST",
//     body: data.toString(),
//   });

//   if (!response.ok) {
//     return (
//       <>
//         <p>error</p>
//       </>
//     );
//   }

//   const datas: any = await response.json();

//   return window.close();

//   // return (
//   //   <>
//   //     <section className="z-10 bg-black min-h-screen">response</section>
//   //   </>
//   // );
// }
"use client";
import { useEffect } from "react";
import { setConfig } from "next/config";
import * as publicRuntimeConfig from "../../../../next.config";
setConfig({ publicRuntimeConfig });

interface callbackParams {
  searchParams: {
    code: string | undefined;
    state: string | undefined;
  };
}

const Home = ({ searchParams }: callbackParams) => {
  const { code, state } = searchParams;
  useEffect(() => {
    const fetchData = async () => {
      if (!code) {
        console.log("No code");
        return;
      }

      console.log(publicRuntimeConfig.CLIENT_ID);
      const data = new URLSearchParams();
      data.append("client_id", "1122188019810717819");
      data.append("client_secret", "JLhTOX5PuzghvkHsMZyQrQqT3XOLLmUM");
      data.append("grant_type", "authorization_code");
      data.append("code", code);
      data.append("redirect_uri", "http://localhost:3000/callback/discord");

      const response = await fetch("https://discord.com/api/v10/oauth2/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: data.toString(),
      });

      if (!response.ok) {
        console.log(response);
        return;
      }

      const datas = await response.json();

      // Perform any necessary actions with the response data
      console.log(datas);

      // Close the current tab/window
      // return window.close();
    };

    fetchData();
  }, [code]);

  return null;
};

export default Home;
