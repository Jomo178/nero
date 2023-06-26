"use client";
import { useEffect } from "react";

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
        return (window.location.href = "/");
      }

      const postData = new URLSearchParams();
      postData.append("code", code);

      const response = await fetch("/api/callback/token", {
        method: "POST",
        body: postData.toString(),
      });

      if (!response.ok) {
        return (window.location.href = "/");
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);

      return window.close();
    };

    fetchData();
  }, [code]);

  return null;
};

export default Home;
