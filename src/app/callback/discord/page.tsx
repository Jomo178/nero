"use client";
import { UserContext } from "@/app/page";
import { useContext, useEffect } from "react";

interface callbackParams {
  searchParams: {
    code: string | undefined;
    state: string | undefined;
  };
}

const Home = ({ searchParams }: callbackParams) => {
  const { code, state } = searchParams;
  const [userData, setUserData] = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      if (!code) {
        console.log("No code");
        return;
      }

      const postData = new URLSearchParams();
      postData.append("code", code);

      const response = await fetch("/api/callback/token", {
        method: "POST",
        body: postData.toString(),
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      setUserData(data.userInfo);

      localStorage.setItem("token", data.token);

      return window.close();
    };

    fetchData();
  }, [code, setUserData]);

  return null;
};

export default Home;
