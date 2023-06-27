"use client";
import Footer from "@/components/lib/footer";
import Navbar from "@/components/lib/navbar";
import SectionOne from "@/components/home/sectionOne";
import SectionTwo from "@/components/home/sectionTwo";
import React, { createContext, useState, useEffect } from "react";
import { users_discord_info_obj } from "@/utils/types";
import Loading from "./loader";

export const UserContext = createContext<users_discord_info_obj | null>(null);

export default function Home() {
  const [userData, setUserData] = useState<users_discord_info_obj | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch(`/api/users/@me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar></Navbar>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <Footer></Footer>
      </UserContext.Provider>
    </>
  );
}
